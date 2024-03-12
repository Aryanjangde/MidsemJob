const jobsData={
  jobs : [{
    "id": 1,
    "company": "Photosnap",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d1b1de43ca6a441e99543d80eb517d34.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/be5619415553470faca94f94f72b6e68.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c245c838322e4ebdae5692c9d9a8bdbe.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cd85fb2d60f04ea7aea3ed183a37a607.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a4cd5572845541adb89e962794ca86fe.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Ruby"],
    "tools": ["Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e8c50754b72f43f6a3eefd188acdac7c.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/96e8d27ab40b4015a59e589687dd177d.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/2dd17882e68d4045a18eab7dfb9c37de.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/68e12689f98740ddaa1f4a78bc2d4f7c.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/db318fbeb51d41b6bc9388259899e297.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }],
  // bg_header_desktop:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7caa466cbd3c4975b9e39ec6700b1656.svg",
  // bg_header_mobile:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ba3bba082bbf4cfb9232732eeca4206d.svg",
  // icon_remove:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/05c800be8f0b4d569e908f1aa949feed.svg",
}


const jobElements = document.querySelectorAll(".job_n, .job");

      function showDivsWithTag(tag) {
          console.log("Selected Tag:", tag);
          jobElements.forEach(function (div) {
              const tags = Array.from(div.querySelectorAll(".tags button")).map(tagButton => tagButton.textContent);
              console.log("Job Tags:", tags);
              if (tags.includes(tag)) {
                  div.style.display = "flex";
              } else {
                  div.style.display = "none";
              }
          });
      }

      document.querySelectorAll(".tags button").forEach(function (tagButton) {
          tagButton.addEventListener("click", ()=> {
              const selectedTag = tagButton.textContent;
              const sct = document.querySelector(".selections");
              sct.style.display = "flex";
              const Selections = document.querySelector(".selctionsinside");
              
              let button = document.createElement("button");
              button.style=tagButton.style;
              button.className="tagstyles";
              button.textContent=tagButton.textContent;
              Selections.append(button);
              
              

              showDivsWithTag(selectedTag);
          });
      });

      function showAll() {
        jobElements.forEach(function (div) {
          console.log(div);
            div.style.display = "flex";
        });
    }


      const clear = document.querySelector(".clear");
      clear.addEventListener("click", ()=>{
        const sct = document.querySelector(".selections");
        sct.style.display = "none";
        showAll();
      })



