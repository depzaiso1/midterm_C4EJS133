const ITEMS = [
    {
        id: 0,
        avatar: `img/Ellipse_1.png`,
        name: `Lelah Nichols`,
        address: `Troy, MI`,
        features: [
            {
                id: 0,
                type: 'clothes'
            },
            {
                id: 1,
                type: 'stem'
            }
        ]
    },
    {
        id: 1,
        avatar: `img/Ellipse_2.png`,
        name: `Jesus Weiss`,
        address: `Fort Worth, TX`,
        features: [
            {
                id: 0,
                type: 'headset'
            },
            {
                id: 1,
                type: 'gadget'
            },
            {
                id: 2,
                type: 'speed'
            },
            {
                id: 3,
                type: 'winter'
            }
        ]
    },
    {
        id: 2,
        avatar: `img/Ellipse_3.png`,
        name: `Annie Rice`,
        address: `Austin, TX`,
        features: [
            {
                id: 0,
                type: 'road'
            },
            {
                id: 1,
                type: 'mountain'
            },
            {
                id: 2,
                type: 'trip'
            },
            {
                id: 3,
                type: 'earth'
            },
            {
                id: 4,
                type: 'nature'
            }
        ]
    },
    {
        id: 3,
        avatar: `img/Ellipse_4.png`,
        name: `Robert Brower`,
        address: `Cincinnati, OH`,
        features: [
            {
                id: 0,
                type: 'Maintenance'
            },
            {
                id: 1,
                type: 'gears'
            },
            {
                id: 2,
                type: 'frames'
            },
            {
                id: 3,
                type: 'repair'
            }
        ]
    },
    {
        id: 4,
        avatar: `img/Ellipse_5.png`,
        name: `Amy Campbell`,
        address: `Warrior, AL`,
        features: [
            {
                id: 0,
                type: 'music'
            },
            {
                id: 1,
                type: 'disks'
            }
        ]
    }
    ,
    {
        id: 5,
        avatar: `img/Ellipse_6.png`,
        name: `Anthony S. Morin`,
        address: `Lyndhurst, NJ`,
        features: [
            {
                id: 0,
                type: 'vintage'
            },
            {
                id: 1,
                type: 'electric'
            }
        ]
    }
];

const bottom_items = document.getElementById("bottom");


function add_users()
{
    let finalHTML = ``;

    ITEMS.forEach(e => {
        let tmpHTML = ``;
        e.features.forEach(f =>{
            tmpHTML+= `<span class="feature"> ${f.type} </span>`
        });

        finalHTML += `<div class="bottom_user">
          <img src=${e.avatar} alt="avatar" />
          <div class="user_info">
            <span class="user_name"> ${e.name} </span>
            <span class="user_address">${e.address}</span>
            <div class="user_features id = "feature_${e.id}">
                ${tmpHTML}
            </div>
          </div>
        </div>`;
    });

    bottom_items.innerHTML = finalHTML;
}

add_users();




