const config = {
  "modalQuestions": [
    {
      "id": "local_sports_attendance",
      "questionText": "How often do you attend local sports events like baseball games?",
      "options": [
        { "value": "rarely", "text": "Rarely" },
        { "value": "few_times_a_year", "text": "A few times a year" },
        { "value": "monthly", "text": "Monthly" },
        { "value": "weekly", "text": "Weekly" }
      ]
    },
    {
      "id": "leisure_preferences",
      "questionText": "When choosing leisure activities, which factors are most important to you?",
      "options": [
        { "value": "proximity", "text": "Proximity to home" },
        { "value": "community_involvement", "text": "Community involvement" },
        { "value": "variety", "text": "Variety of experiences" },
        { "value": "exclusivity", "text": "Exclusivity/unique offers" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How do you typically stay informed about events and offers in your neighborhood?",
      "options": [
        { "value": "social_media", "text": "Social media" },
        { "value": "direct_mail", "text": "Direct mail and flyers" },
        { "value": "newsletters", "text": "Local newsletters/newspapers" },
        { "value": "word_of_mouth", "text": "Word of mouth" }
      ]
    },
    {
      "id": "ideal_day",
      "questionText": "Imagine you could design your ideal day around your favorite activity. What does that day look like?",
      "options": [
        { "value": "sports_events", "text": "Enjoying a full day of sports events" },
        { "value": "community_cultural", "text": "Attending a mix of community and cultural activities" },
        { "value": "relaxation_home", "text": "A day of relaxation at home" },
        { "value": "travel", "text": "Traveling out of town for unique experiences" }
      ]
    }
  ],
  "giveaway": {
    "name": "Blue Jays Ticket Giveaway",
    "heroHeadline": "Win $100 Worth of <span class='highlight'>Jays Tickets</span> This Canada Day!",
    "heroSubheadline": "Experience summer magic with a chance to cheer live at the game and create unforgettable memories!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 2, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/qwwbamqh3srmc0cqgfhtagbdgg.jpg",
    "heroCtaText": "Enter to Win Now!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're Entered! 🎉",
    "successModalMainMessage": "Your entry for the Blue Jays $100 Ticket Giveaway has been successfully submitted. Good luck!",
    "successModalEmailPrompt": "We'll announce the lucky winner by email shortly after the draw date. Stay tuned!"
  },
  "prize": {
    "name": "$100 Blue Jays Ticket Pack",
    "value": "$100 Value",
    "description": "Enjoy a day at the ballpark with tickets that let you soak in the game-day excitement live. Perfect for sports lovers and summer fun seekers!",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/scx83whx8nrma0cqgfjag0msgm.jpg",
        "alt": "Blue Jays Tickets Image 1"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/3eck6pkzqnrmc0cqgfj8a1h4d0.jpg",
        "alt": "Blue Jays Tickets Image 2"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/gdq9xqy1pxrma0cqgfj81yjba4.jpg",
        "alt": "Blue Jays Tickets Image 3"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/q81p71g4zsrme0cqgfjv7xggfm.jpg",
        "alt": "Blue Jays Tickets Image 4"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 worth of tickets to cheer on the Jays live" },
      { "icon": "fas fa-users", "text": "Bring a friend and enjoy the electric atmosphere" },
      { "icon": "fas fa-baseball-ball", "text": "Experience the thrill of live baseball this summer" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy online entry" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I WANT TO WIN Jays Tickets!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-qrcode",
        "title": "Scan and Win",
        "description": "Use our QR code to sign up instantly at the booth or online."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Check Your Inbox",
        "description": "We'll keep you posted on your entry status via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Quick & Easy Entry" },
      { "icon": "fas fa-baseball-ball", "text": "Enjoy the Summer Fun" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details for a chance to win Jays tickets valued at $100!",
    "entryCountText": "Join hundreds of fans already entered!",
    "socialSharePrompt": "Share the excitement with friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Jays Tickets this Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Random Selection",
      "text": "The winner will be chosen through a certified random drawing process, guaranteeing equal opportunity for all entries."
    },
    "importantNotice": {
      "title": "Winner Notification via Email",
      "text": "The winner will be contacted through the email address submitted during entry. Please keep an eye on your inbox and spam folder after July 2, 2025."
    },
    "faq": [
      {
        "q": "Who can enter this giveaway?",
        "a": "Open to legal residents of Toronto who are 18 years or older at the time of entry."
      },
      {
        "q": "When can I enter?",
        "a": "Entries open from June 18, 2025 through July 2, 2025 at 11:59 PM EST."
      },
      {
        "q": "How is the winner chosen?",
        "a": "One winner will be selected randomly from all valid entries received during the promotion period."
      },
      {
        "q": "When will I know if I win?",
        "a": "The winner will be notified by email on or shortly after July 2, 2025."
      },
      {
        "q": "How many times can I enter?",
        "a": "One entry per person/email address is allowed. Multiple entries will be disqualified."
      },
      {
        "q": "Is my information safe?",
        "a": "We respect your privacy. Your information will only be used for this giveaway and handled according to our privacy policy. No data is sold."
      }
    ],
    "tips": [
      "Double-check your email before submitting.",
      "Add shar@theskygroup.ca to your safe sender list to receive winner notifications.",
      "Follow The Sky Group on social media for updates and announcements."
    ]
  },
  "footerContact": {
    "organizerName": "The Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP3OKUEL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T163351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8d0G2gtlFrOmXwqad0Q0r%2F0bW4T1VU69G8Cf7QIEMjAiAQ4NuliIQHgtEhjLt4aGd0ljiteoRUXq%2FwXO7QF5ismyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBECNCVWnYg8VuCZBKtwDk5wuw6NFAx7%2Bh93ObSZ7KeMxlRTAC%2BZdodG6BWSsqA3s825mDB6tIZJ7AShJn5vkxM1EYgoHj2%2F910I21O%2BKZCpdHQWxp0EUZKmc%2FucPMUpHXlhAzvRcy9Sreuik1RpFU9K7nwc2xOLkL7EIXJsefouMbq4T%2FYJnJ86qTxxfOMoBBlaDV3t4G8fxBHpmfF%2FBdHKhkX5XV5Evg2owc%2BDd4klL7upFUE1Nd8jjv2JK%2FZDvUTVfHQNu%2FDiBhwzqUhPCyorWAUNg8h1Lh72SPIpjlqOCTwt6swEJhMJhGuRds%2B4jX7sNiVxpV%2B0hIEJU7yzsuj5w471LUqkLlF%2B1bZDqPfRgMEs3EHnbGLQ21hFGPdggkOOk6QakzzbqqWxtK8tgiIYxMapZV5CGB%2F70SF3fsCOF0ZwtMjNJtIhfDERwye84PAzKduUBG1O2Q9%2FZJqR%2BxBegMl8aGadPmzbQ3qof2Hgfp%2Fs%2FkGBNI9Iuc5ReRtuESplSViFFFyhY6dTxUsX9bA3Mqp1zoYb%2F9f1wmJFK6LV6xud2mEcnwR5MXcYqf3sAFP%2FFryfqwGR3rFlDcQEuK2lTRg%2BEGVEN8FQd2%2Be%2FkzDOMO7eM6LjhVb4Mv53dzgkZ73PQK3wTMbtJQww3PTKwgY6pgGCbrmDgCXhY%2BI06pm8%2FZTiscqs8l8iZypbem7%2FEe0Zm6ajqGTVbLdg29FTMtSwuz9XT3fgV3zs4Ix6KSAGlGyzFEOfbmKWC330Jk8hj9xBz1QBmfWJDLW0OtgDWGL7qIixhc3Y%2F%2Bdq9taRMrtLVKwuDhNEViWfopXJMso7A4pi5NKgwdKVxJ9NEOdT0yR%2FspQhOJE0uX8Afj1yzgPcHuYwX%2BURdO7K&X-Amz-Signature=b3a24a46e382111685f8fff7e31d6f6578ac847976d3d3ce4401ff4889510e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "brokerageName": "Property.Ca",
    "secondaryLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png",
    "secondaryLogoAlt": "Brokerage Logo",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "agentContact": {
      "name": "Shar Banifatemi",
      "title": "",
      "phone": "1 647 887 4996",
      "email": "shar@theskygroup.ca",
      "headshotImage": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/7c0e9b23-c6a0-451b-b565-1973d2b68dde/Group_Shot_-_Couch.jpeg"
    },
    "copyrightOwner": "The Sky Group",
    "footerDisclaimer": "This giveaway is operated by The Sky Group and is subject to official rules and privacy policies."
  },
  "meta": {
    "pageTitle": "Win Jays Tickets - Canada Day Giveaway!",
    "navBrandLogoText": "The Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "theme": "dark",
    "primaryColorOverride": "",
    "confettiColors": ["#004B93", "#DC143C", "#FFD700", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-169",
    "repoUrl": "https://github.com/arslvn93/Giveaway-169",
    "netlifyUrl": "http://Giveaway-169.netlify.app"
  }
};
