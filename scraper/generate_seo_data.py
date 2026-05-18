import json
import os

courses = [
    {"id": "myp", "slug": "ib-myp-maths", "name": "IB MYP Maths", "level": "MYP"},
    {"id": "ai-sl", "slug": "ib-math-ai-sl", "name": "IB Math AI SL", "level": "DP Standard"},
    {"id": "ai-hl", "slug": "ib-math-ai-hl", "name": "IB Math AI HL", "level": "DP Higher"},
    {"id": "aa-sl", "slug": "ib-math-aa-sl", "name": "IB Math AA SL", "level": "DP Standard"},
    {"id": "aa-hl", "slug": "ib-math-aa-hl", "name": "IB Math AA HL", "level": "DP Higher"},
    {"id": "ia", "slug": "ib-math-ia", "name": "IB Math IA", "level": "All DP", "type": "help"}
]

# Detailed geography from PDF
countries_data = {
    "India": {
        "cities": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Gurgaon", "Noida"],
        "states": ["Maharashtra", "Karnataka", "Tamil Nadu", "Telangana", "Delhi NCR", "West Bengal", "Gujarat"]
    },
    "United Arab Emirates": {
        "cities": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ras Al Khaimah"],
        "states": ["Dubai Emirate", "Abu Dhabi Emirate", "Sharjah Emirate"]
    },
    "United Kingdom": {
        "cities": ["London", "Manchester", "Birmingham", "Edinburgh", "Oxford", "Cambridge", "Bristol", "Leeds"],
        "states": ["England", "Scotland", "Wales", "Northern Ireland"]
    },
    "United States": {
        "cities": ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco", "Boston", "Washington DC", "Seattle", "Miami", "Atlanta"],
        "states": ["New York", "California", "Texas", "Florida", "Massachusetts", "Illinois", "Washington", "Georgia"]
    },
    "Singapore": {
        "cities": ["Singapore City", "Bukit Timah", "Orchard", "Tampines"],
        "states": ["Central Region", "East Region", "West Region"]
    },
    "Hong Kong": {
        "cities": ["Hong Kong Island", "Kowloon", "New Territories", "Sha Tin"],
        "states": ["Hong Kong Island", "Kowloon", "New Territories"]
    },
    "Canada": {
        "cities": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
        "states": ["Ontario", "British Columbia", "Quebec", "Alberta"]
    },
    "Australia": {
        "cities": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
        "states": ["New South Wales", "Victoria", "Queensland", "Western Australia"]
    },
    "Germany": {
        "cities": ["Berlin", "Munich", "Frankfurt", "Hamburg", "Dusseldorf"],
        "states": ["Bavaria", "Berlin", "Hesse", "North Rhine-Westphalia"]
    },
    "Netherlands": {
        "cities": ["Amsterdam", "The Hague", "Rotterdam", "Eindhoven"],
        "states": ["North Holland", "South Holland", "North Brabant"]
    },
    "Switzerland": {
        "cities": ["Zurich", "Geneva", "Basel", "Lausanne", "Bern"],
        "states": ["Zurich Canton", "Geneva Canton", "Basel-Stadt"]
    },
    "Spain": {
        "cities": ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga"],
        "states": ["Madrid", "Catalonia", "Andalusia", "Valencia"]
    }
}

# Compact Country Hubs (Cities only, no states detailed in blueprint)
compact_countries = {
    "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Chengdu"],
    "Japan": ["Tokyo", "Osaka", "Yokohama", "Kobe", "Nagoya"],
    "South Korea": ["Seoul", "Busan", "Incheon", "Daegu"],
    "Thailand": ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
    "Malaysia": ["Kuala Lumpur", "Penang", "Johor Bahru", "Kota Kinabalu"],
    "Indonesia": ["Jakarta", "Surabaya", "Bali", "Bandung"],
    "Turkey": ["Istanbul", "Ankara", "Izmir", "Antalya"],
    "Mexico": ["Mexico City", "Monterrey", "Guadalajara", "Cancun"],
    "Brazil": ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Curitiba"],
    "Egypt": ["Cairo", "Alexandria", "Giza", "Hurghada"],
    "South Africa": ["Johannesburg", "Cape Town", "Durban", "Pretoria"],
    "Qatar": ["Doha", "Al Wakrah", "Al Khor"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Dhahran", "Dammam"]
}

def format_slug(text):
    return text.lower().replace(" ", "-").replace(",", "").replace(".", "")

pages = []

# Generate Core Course Pages
for course in courses:
    pages.append({
        "type": "course_pillar",
        "course_id": course["id"],
        "slug": f"/{course['slug']}/",
        "title": f"{course['name']} Tutor Online | MYP, AI SL/HL, AA SL/HL | #1 Rated IB Math Tuition",
        "h1": f"{course['name']} Tutoring \u2014 Build Strong Foundations for IB Diploma",
        "meta_desc": f"Expert {course['name']} tutor. Master the curriculum with personalized online tuition. Free trial available.",
        "course": course
    })

# Generate Country, State, and City Hub Pages for Detailed Geography
for country, data in countries_data.items():
    country_slug = format_slug(country)
    for course in courses:
        action = "Help" if course["id"] == "ia" else "Tutor"
        
        # Country Page
        pages.append({
            "type": "country_hub",
            "course_id": course["id"],
            "country": country,
            "slug": f"/{course['slug']}-{action.lower()}-{country_slug}/",
            "title": f"Best {course['name']} {action} in {country} | Online & In-Person",
            "h1": f"Best {course['name']} {action} in {country} \u2014 Online & In-Person",
            "meta_desc": f"Expert {course['name']} {action.lower()} for students in {country}. Personalized online tuition aligned with {country} IB schools. Book a free trial today.",
            "course": course
        })

        # State Pages (e.g. /ib-math-ai-sl-tutor-maharashtra-india/)
        for state in data["states"]:
            state_slug = format_slug(state)
            pages.append({
                "type": "state_hub",
                "course_id": course["id"],
                "country": country,
                "state": state,
                "slug": f"/{course['slug']}-{action.lower()}-{state_slug}-{country_slug}/",
                "title": f"Top {course['name']} {action} in {state}, {country} | Online IB Math Tuition",
                "h1": f"Expert {course['name']} {action} in {state} \u2014 Personalized Online",
                "meta_desc": f"Looking for {course['name']} {action.lower()} in {state}, {country}? Connect with expert IB Math examiners. 1-on-1 personalized lessons.",
                "course": course
            })

        # City Pages
        for city in data["cities"]:
            city_slug = format_slug(city)
            pages.append({
                "type": "city_hub",
                "course_id": course["id"],
                "country": country,
                "city": city,
                "slug": f"/{course['slug']}-{action.lower()}-{city_slug}/",
                "title": f"{course['name']} {action} in {city} | Best Online Tuition in {city}, {country}",
                "h1": f"Top {course['name']} {action} in {city} \u2014 Personalized Online Tuition",
                "meta_desc": f"Looking for an IB Math tutor in {city}? Our expert tutors provide personalized online tuition for {course['name']}. Trusted by {city} IB students. Free trial available.",
                "course": course
            })

# Generate Country and City Hub Pages for Compact Countries
for country, cities in compact_countries.items():
    country_slug = format_slug(country)
    for course in courses:
        action = "Help" if course["id"] == "ia" else "Tutor"
        
        # Country Page
        pages.append({
            "type": "country_hub",
            "course_id": course["id"],
            "country": country,
            "slug": f"/{course['slug']}-{action.lower()}-{country_slug}/",
            "title": f"{course['name']} {action} in {country} | Expert Online Tuition",
            "h1": f"Best {course['name']} {action} in {country} \u2014 Online & In-Person",
            "meta_desc": f"Expert {course['name']} {action.lower()} for students in {country}. Personalized online tuition aligned with {country} IB schools. Book a free trial today.",
            "course": course
        })

        # City Pages
        for city in cities:
            city_slug = format_slug(city)
            pages.append({
                "type": "city_hub",
                "course_id": course["id"],
                "country": country,
                "city": city,
                "slug": f"/{course['slug']}-{action.lower()}-{city_slug}/",
                "title": f"{course['name']} {action} in {city} | Best Online Tuition in {city}, {country}",
                "h1": f"Top {course['name']} {action} in {city} \u2014 Personalized Online Tuition",
                "meta_desc": f"Looking for an IB Math tutor in {city}? Our expert tutors provide personalized online tuition for {course['name']}. Trusted by {city} IB students. Free trial available.",
                "course": course
            })

# Extra IA Resource Pages (blueprint page 33)
ia_resources = [
    {
        "type": "ia_resource",
        "slug": "/ib-math-ia-exploration-guide/",
        "title": "IB Math IA Exploration Guide | Step-by-Step Writing Help",
        "h1": "How to Write a Perfect IB Math IA Exploration",
        "meta_desc": "Complete guide to writing your IB Math IA exploration. Step-by-step instructions, structure templates, and expert tips to score 20/20. Free resources included.",
        "course": courses[-1] # IA Course
    },
    {
        "type": "ia_resource",
        "slug": "/ib-math-ia-topics-ideas/",
        "title": "50+ IB Math IA Topic Ideas for 2026 | AI & AA Students",
        "h1": "50+ Winning IB Math IA Topic Ideas \u2014 AI SL/HL & AA SL/HL",
        "meta_desc": "Discover 50+ IB Math IA topic ideas for AI and AA students. Curated by IB examiners. Find unique, high-scoring exploration topics for your Internal Assessment.",
        "course": courses[-1]
    },
    {
        "type": "ia_resource",
        "slug": "/ib-math-ia-criteria-tips/",
        "title": "IB Math IA Criteria Explained | Marking Guide & Tips to Score 20/20",
        "h1": "IB Math IA Marking Criteria \u2014 How to Maximize Every Point",
        "meta_desc": "Understand the IB Math IA marking criteria inside out. Expert breakdown of all 5 criteria with tips to score maximum marks. Written by IB Math examiners.",
        "course": courses[-1]
    }
]
pages.extend(ia_resources)

os.makedirs("data", exist_ok=True)
with open("data/seo_pages.json", "w", encoding="utf-8") as f:
    json.dump(pages, f, indent=2, ensure_ascii=False)

print(f"Generated {len(pages)} programmatic SEO pages successfully.")
