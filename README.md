# ReportWorthy

Bookmarklets to fill the reporting gap in TrailLifeConnect.com

## What is a bookmarklet

A bookmarklet is a specially crafted bookmark for your browser that instead of opening a website it runs a piece of code. You can tell a link or bookmark is a bookmarklet if the URL starts with `javascript:` instead of `http:` or `https:`.

Bookmarklets only work in desktop browsers and do not work in mobile browsers.

*I'm a security nut so feel compelled to mention: running code on your computer can be dangerous so only install and use bookmarklets from sources you trust.*

## How to use

I hope to make the installation process easier in the future with more instructions, but for now you'll need to search the web for "how to install bookmarklet" and for each bookmarklet you want to use (currently there is only one) find it in the [bookmarklets](bookmarklets) folder and the entire content of the file is what goes into your bookmarklet - it already has the `javascript:` prefix and everything.

## Inventory

### SummaryAdvancementExport

Use on the Advancement > **Track Advancement** page when **Tracking Style** is **Summary View**

Select multiple trailmen and multiple badges, allow the table to populate, and run the bookmarklet. It will format the table as a CSV file and download it. This CSV file can be opened in programs like Excel, Numbers, or OpenOffice Calc.
