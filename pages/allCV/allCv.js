const content=document.querySelector('.content')

const usser=[
{img:'https://cdn.futwiz.com/assets/img/fc24/faces/50584019.png',name:'Bellingham', age:'20', surname:'Jude Victor William', profesia:'Футболист',club:'Real Madrid',isntagram:'@judebellingham' },
{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/640px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg', name:'Benzema', age:'35', surname:'Karim Mostafa', profesia:'Футболист', club:'Al-Ittihad', isntagram:'@karimbenzema',},
{img:'https://static.printler.com/cache/b/e/7/a/d/1/be7ad18baf0da454199be4ac8cefa8990f6b5211.jpg', name:'Mbappé', age:'24', surname:'Kylian', profesia:'Футболист', club:'Paris Saint-Germain', isntagram:'@k.mbappe)',},
{img:'https://b.fssta.com/uploads/application/soccer/headshots/66617.png', name:'Haaland', age:'23', surname:'Erling Braut', profesia:'Футболист', club:'Manchester City', isntagram:'@erling.haaland',},
{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg', name:'Cristiano Ronaldo', age:'38', surname:'Dos Santos Aveiro', profesia:'Футболист', club:'Al Nassr', isntagram:'@cristiano',},
{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', name:'Messi', age:'36', surname:'Lionel Andrés', profesia:'Футболист', club:'Inter Maimi', isntagram:'@leomessi',},
{img:'https://sportarena-cdn.s3.amazonaws.com/production/uploads/player/photo/1134403/VINICIUS_380x501.jpg', name:'Vinícius Júnio', age:'23', surname:'José Paixão de Oliveira', profesia:'Футболист', club:'Real Madrid', isntagram:'@vinijr',},
{img:'https://static.printler.com/cache/a/0/1/2/c/9/a012c9a024c3ff54b8f84e4238396bf9039138e7.jpg', name:'Zlatan', age:'42', surname:'Ibrahimović', profesia:'Футболист', club:'AC Milan', isntagram:'@iamzlatanibrahimovic',},
{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/330px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg', name:'Neymar Jr', age:'31', surname:'Da Silva Santos', profesia:'Футболист', club:'Al Hilal', isntagram:'@neymarjr',},
{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sergio_Ramos_10mar2007.jpg/285px-Sergio_Ramos_10mar2007.jpg', name:'Ramos', age:'37', surname:'Sergio García', profesia:'Футболист', club:'Sevilla', isntagram:'@sergioramos',}
]

function ussernames(array) {
    
    for (const ussernames of array) {
        content.innerHTML+=`
        <div class= "rezume">
        <img width='250px' src='${ussernames.img}' />
        <h5>Имя: ${ussernames.name}</h5>
        <h5>Фамилия: ${ussernames.surname}</h5>
        <h4>${ussernames.age} лет</h4>
        <h5>Профессия: ${ussernames.profesia}</h5>
        <h4>Клуб: ${ussernames.club}</h4>
        <h4>instagram: ${ussernames.isntagram}</h4>
        </div>
        `
    }
}
ussernames(usser)