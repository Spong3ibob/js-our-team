const team =[
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        images: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        images: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        position: "Office Manager",
        images: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        images: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        images: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        images: "barbara-ramos-graphic-designer.jpg"
    }
];
const cotainerBig = document.getElementById("#cards")
for(let i = 0; i < team.length; i++){
    const teams = team[i];
    console.log(teams);
    const listItem =`
        <li>
            <h4>${teams.name}</h4>
            <h4>${teams.position}</h4>
            <p>${teams.images}</p>
        </li>
    `;
    document.getElementById("team-list").innerHTML += listItem;
}


