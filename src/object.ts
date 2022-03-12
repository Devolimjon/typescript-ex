type Author = {
  name: string;
  surname : string;
  job:string;
  img:string;
  rating:number;
}
type Blog = {
  name: string ;
  date : string;
  img : string;
  content:string;
  author:Author;
}

const people:Blog = {
  name : "Olimjon",
  date : "21-mart",
  img : '?????????????????????',
  content:"Блог (интернет-маколани) ифодаловчи тип ва тасосида",
  author: {
    name: 'olimjon',
    surname : 'Mahmudov',
    job:'Psixologiyachi',
    img:'???????????',
    rating:5.0
  }
}

// 2-masala

