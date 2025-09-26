/**
 * Website Hub Configuration
 * 
 * This file contains all the websites that will be displayed in your Website Hub.
 * To add a new website, simply add a new object to the websitesData array below.
 * To remove a website, delete its object from the array.
 * 
 * Each website object should have the following properties:
 * - title: The name of the website (required)
 * - description: A brief description of what the website is about (required)
 * - url: The full URL to the website (required)
 * - category: A category to group similar websites (optional)
 * - favicon: Custom favicon URL (optional - will auto-generate if not provided)
 * - color: Custom accent color for the card (optional - will use default gradient if not provided)
 * 
 * Example:
 * {
 *     title: "Example Website",
 *     description: "This is an example website description that explains what the site is about.",
 *     url: "https://example.com",
 *     category: "Example",
 *     favicon: "https://example.com/favicon.ico", // Optional
 *     color: "#ff6b6b" // Optional
 * }
 */

const websitesData = [
    // Development & Programming
    {
        title: "FireTv1",
        description: "All in one reborn",
        url: "https://allinonereborn.xyz/livetv-hub/",
        category: "TV",
        color: "#04a3ffff"
    },
    {
        title: "FireTv1",
        description: "All in one reborn 2",
        url: "https://amitb3669.github.io/jiotv-plus/",
        category: "TV",
        color: "#04a3ffff"
    },
    {
        title: "FireTv1",
        description: "All in one reborn 3",
        url: "https://mini1.allinonereborn.xyz/jiotv-ww192/",
        category: "TV",
        color: "#04a3ffff"
    },
    {
        title: "FireTv1",
        description: "All in one reborn 4",
        url: "https://allinonereborn.xyz/sony/",
        category: "TV",
        color: "#04a3ffff"
    },
    {
        title: "FireTv2",
        description: "TataPlays",
        url: "https://tataplays.site/",
        category: "TV",
        color: "#00ffccff"
    },
    {
        title: "FireTv2",
        description: "TataPlays",
        url: "https://tataplays.site/search?s=Hindi",
        category: "TV",
        color: "#00ffccff"
    },
    {
        title: "FireTv2",
        description: "TataPlays",
        url: "https://tataplays.site/search?s=Star",
        category: "TV",
        color: "#00ffccff"
    },
    {
        title: "FireTv2",
        description: "TataPlays",
        url: "https://tataplays.site/search?s=sony",
        category: "TV",
        color: "#00ffccff"
    },
    {
        title: "FireTv2",
        description: "TataPlays",
        url: "https://tataplays.site/search?s=Movie",
        category: "TV",
        color: "#00ffccff"
    },
    {
        title: "FireTv3",
        description: "Mafia",
        url: "https://mov.mafiatv.live/",
        category: "TV",
        color: "#ff00d0ff"
    },
    {
        title: "FireTv4",
        description: "MadPlay",
        url: "https://madplay.site",
        category: "TV",
        color: "#f2ff00ff"
    },
    {
        title: "FireTv5",
        description: "All in one reborn - z",
        url: "https://allinonereborn.xyz/sony/",
        category: "TV",
        color: "#ff004cff"
    },
    {
        title: "FireTv5",
        description: "All in one reborn - z",
        url: "https://allinonereborn.xyz/sony/",
        category: "TV",
        color: "#ff004cff"
    },
    {
        title: "FireTv5",
        description: "All in one reborn - z",
        url: "https://allinonereborn.xyz/sony/",
        category: "TV",
        color: "#ff004cff"
    },
    {
        title: "FireTv6",
        description: "netmirror",
        url: "https://net2025.cc",
        category: "TV",
        color: "#aae0ffff"
    },
    {
        title: "FireTv7",
        description: "watchtvs",
        url: "https://watchtvs.live/",
        category: "TV",
        color: "#aae0ffff"
    },
    {
        title: "FireTv8",
        description: "JioTv",
        url: "https://jiotv.watchtvs.live/",
        category: "TV",
        color: "#aae0ffff"
    },
];

/**
 * HOW TO ADD A NEW WEBSITE:
 * 
 * 1. Copy the template below:
 * {
 *     title: "Website Name",
 *     description: "Brief description of the website",
 *     url: "https://website-url.com",
 *     category: "Category Name",
 *     color: "#hexcolor" // Optional
 * }
 * 
 * 2. Fill in the details for your website
 * 3. Add a comma after the last website in the array above
 * 4. Paste your new website object
 * 5. Save the file
 * 6. Refresh your browser to see the changes
 * 
 * HOW TO REMOVE A WEBSITE:
 * 
 * 1. Find the website object you want to remove in the array above
 * 2. Delete the entire object (including the curly braces and comma)
 * 3. Save the file
 * 4. Refresh your browser to see the changes
 * 
 * HOW TO EDIT A WEBSITE:
 * 
 * 1. Find the website object you want to edit
 * 2. Modify the properties you want to change
 * 3. Save the file
 * 4. Refresh your browser to see the changes
 * 
 * TIPS:
 * - Keep descriptions concise but informative (1-2 sentences)
 * - Use consistent category names for better organization
 * - Colors should be in hex format (e.g., #ff6b6b)
 * - URLs should include the protocol (https://)
 * - Favicons will be automatically generated if not provided
 */

