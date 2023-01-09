const templatesSection = document.getElementById("templates")

const projectDescription1 = document.getElementById("projectDescription1")
const projectDescription2 = document.getElementById("projectDescription2")
const projectDescription3 = document.getElementById("projectDescription3")
const projectDescription4 = document.getElementById("projectDescription4")

const template1 = document.getElementById("template1")
const template2 = document.getElementById("template2")
const template3 = document.getElementById("template3")
const template4 = document.getElementById("template4")

// let test = 0

templatesSection.addEventListener('click', function(e) {
    console.log(e.target.id)

    if (e.target.id == "projectDescription1") {
        templatesSection.removeChild(document.getElementById("template1"))

        const descriptionBox1 = document.createElement('div')
        descriptionBox1.className = "descriptionBox"
        descriptionBox1.setAttribute('id', "descriptionBox1")
        descriptionBox1.innerHTML = `
            <div class="header">
                <div class="placeHolder"></div>
                <h2>Student Housing Web Parser</h2>
                <i class="fa-solid fa-circle-xmark fa-2x" id="exit1"></i>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptates consectetur rerum libero, impedit perspiciatis sunt adipisci aliquam nisi, voluptate eum enim eveniet iure laborum ut esse, vero necessitatibus eos. Quidem voluptatibus vero minima et placeat! Rerum et sint quam? Assumenda voluptates beatae laboriosam reprehenderit repellendus corrupti ipsam nisi voluptate!</p>`
        templatesSection.insertBefore(descriptionBox1, templatesSection.children[0])
    }

    if (e.target.id == "projectDescription2") {
        templatesSection.removeChild(templatesSection.children[1])
    
        const descriptionBox2 = document.createElement('div')
        descriptionBox2.className = "descriptionBox"
        descriptionBox2.setAttribute('id', "descriptionBox2")
        descriptionBox2.innerHTML = `
            <div class="header">
                <div class="placeHolder"></div>
                <h2>SVG Parser</h2>
                <i class="fa-solid fa-circle-xmark fa-2x" id="exit2"></i>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptates consectetur rerum libero, impedit perspiciatis sunt adipisci aliquam nisi, voluptate eum enim eveniet iure laborum ut esse, vero necessitatibus eos. Quidem voluptatibus vero minima et placeat! Rerum et sint quam? Assumenda voluptates beatae laboriosam reprehenderit repellendus corrupti ipsam nisi voluptate!</p>`
        templatesSection.insertBefore(descriptionBox2, templatesSection.children[1])
    }

    if (e.target.id == "projectDescription3") {
        templatesSection.removeChild(document.getElementById("template3"))

        const descriptionBox3 = document.createElement('div')
        descriptionBox3.className = "descriptionBox"
        descriptionBox3.setAttribute('id', "descriptionBox3")
        descriptionBox3.innerHTML = `
            <div class="header">
                <div class="placeHolder"></div>
                <h2>Portfolio Management Program</h2>
                <i class="fa-solid fa-circle-xmark fa-2x" id="exit3"></i>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptates consectetur rerum libero, impedit perspiciatis sunt adipisci aliquam nisi, voluptate eum enim eveniet iure laborum ut esse, vero necessitatibus eos. Quidem voluptatibus vero minima et placeat! Rerum et sint quam? Assumenda voluptates beatae laboriosam reprehenderit repellendus corrupti ipsam nisi voluptate!</p>`
        templatesSection.insertBefore(descriptionBox3, templatesSection.children[2])
    }

    if (e.target.id == "projectDescription4") {
        templatesSection.removeChild(document.getElementById("template4"))

        const descriptionBox4 = document.createElement('div')
        descriptionBox4.className = "descriptionBox"
        descriptionBox4.setAttribute('id', "descriptionBox4")
        descriptionBox4.innerHTML = `
            <div class="header">
                <div class="placeHolder"></div>
                <h2>Space Invaders</h2>
                <i class="fa-solid fa-circle-xmark fa-2x" id="exit4"></i>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptates consectetur rerum libero, impedit perspiciatis sunt adipisci aliquam nisi, voluptate eum enim eveniet iure laborum ut esse, vero necessitatibus eos. Quidem voluptatibus vero minima et placeat! Rerum et sint quam? Assumenda voluptates beatae laboriosam reprehenderit repellendus corrupti ipsam nisi voluptate!</p>`
        templatesSection.appendChild(descriptionBox4)
    }

    if (e.target.id == "exit1") {
        templatesSection.removeChild(document.getElementById("descriptionBox1"))
    
        const template1 = document.createElement('div')
        template1.className = "template"
        template1.setAttribute('id', "template1")
        template1.innerHTML = `
        <div class="templateImage">
            <img class="imgScale" src="images/item1.png" alt="Template">
        </div>
        <div class="templateContent">
            <h2>Student Housing Web Parser</h2>
            <a href="https://github.com/JoffduPreez/Space_Invaders">GitHub</a>
            <p class="projectDescription" id="projectDescription1">Project Description</p>
        </div>`
        templatesSection.insertBefore(template1, templatesSection.children[0])
    }

    if (e.target.id == "exit2") {
        templatesSection.removeChild(document.getElementById("descriptionBox2"))

        const template2 = document.createElement('div')
        template2.className = "template"
        template2.setAttribute('id', "template2")
        template2.innerHTML = `
        <div class="templateImage">
            <img class="imgScale" src="images/item2.png" alt="Template">
        </div>
        <div class="templateContent">
            <h2>Student Housing Web Parser</h2>
            <a href="https://github.com/JoffduPreez/Space_Invaders">GitHub</a>
            <p class="projectDescription" id="projectDescription2">Project Description</p>
        </div>`
        templatesSection.insertBefore(template2, document.getElementById("template3"))
    }

    if (e.target.id == "exit3") {
        templatesSection.removeChild(document.getElementById("descriptionBox3"))

        const template3 = document.createElement('div')
        template3.className = "template"
        template3.setAttribute('id', "template3")
        template3.innerHTML = `
        <div class="templateImage">
            <img class="stretchToFit" src="images//Portfolio Management Program.png" alt="Template">
        </div>
        <div class="templateContent">
            <h2>Student Housing Web Parser</h2>
            <a href="https://github.com/JoffduPreez/Space_Invaders">GitHub</a>
            <p class="projectDescription" id="projectDescription2">Project Description</p>
        </div>`
        templatesSection.insertBefore(template3, document.getElementById("template4"))
    }

    if (e.target.id == "exit4") {
        templatesSection.removeChild(document.getElementById("descriptionBox4"))

        const template3 = document.createElement('div')
        template3.className = "template"
        template3.setAttribute('id', "template4")
        template3.innerHTML = `
        <div class="templateImage">
            <img src="images/Space Invaders.png" alt="Template">
        </div>
        <div class="templateContent">
            <h2>Student Housing Web Parser</h2>
            <a href="https://github.com/JoffduPreez/Space_Invaders">GitHub</a>
            <p class="projectDescription" id="projectDescription2">Project Description</p>
        </div>`
        templatesSection.appendChild(template3)
    }


})

