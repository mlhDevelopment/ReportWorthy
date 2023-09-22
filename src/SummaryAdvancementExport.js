(() => {
    const headers = '"Award/Badge",' + $("#award_html .adv-grid-header").map((_, el) => `"${el.innerText.trim()}"`).toArray().join(",");

    const reportData = $("#table_items > tr").map((ixRow, elRow) => {
        const rowData = $(elRow).children("td").map((ixCol, elCol) => {
            const text = elCol.innerText.trim();
            const $this = $(elCol);

            if (ixCol === 0) {
                return `"${text}"`; // row header, escaped with quotes
            }

            if ($this.find(".complete_level").length > 0 && text) {
                return text; // badgework, percentage complete
            }

            if ($this.find(".completed_on_date").length > 0) {
                return "100%"; // badgework, completed badge
            }

            return "0%";
        });

        return rowData.toArray().join(",");
    }).toArray().join("\n");

    // Download the file
    const csv = headers + "\n" + reportData;
    const downloadLink = document.createElement('a');
    downloadLink.textContent = 'Download Export';
    downloadLink.download = "TLCSummaryAdvancementExport.csv";
    downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
})();
