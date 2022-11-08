
import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {
  const[product,setProduct]=useState([{
    id:1,
    title:"Macbook",
    image:"https://picsum.photos/id/0/5000/3333",
    info:"8GB RAM 256GB SSD",
    adet:1
  },
  {
    id:2,
    title:"Iphone",
    image:"https://picsum.photos/id/3/5000/3333",
    info:"6GB RAM 20 megapiksel kamera",
    adet:1

  },
  {
    id:3,
    title:"Dell Pc",
    image:"https://cdn.akakce.com/dell/dell-inspiron-3567-fhdb20f41c-i5-7200u-4-gb-1-tb-radeon-r5-m430-15-6-full-hd-notebook-z.jpg",
    info:"16GB RAM 48 saat şarj ömrü",
    adet:1
  },
  {
    id:4,
    title:"Tv",
    image:"//images.samsung.com/is/image/samsung/tr-fhd-t5300-ue32t5300auxtk-frontblack-237105305?$360_288_PNG$",
    info:"Full Hd ekran internet bağlantısı",
    adet:1
  },
]);

const[basket,setBasket]=useState([]);
  return <div className="App">
    <h1>Shopping Card App</h1>
    <h2>Products</h2>
    <div className='urunler'>
      {
        product.map((eleman,index)=>{
          return( 
          <Card
            onClick={()=>{
              const arr=[...basket];
              if(arr.findIndex((ind)=>{
                return eleman.id===ind.id;

              })===-1){
                arr.push(eleman);
                setBasket(arr);

              }
              else{
                arr.map((item)=>{
                  if(item.id===eleman.id){
                    return(eleman.adet+=1);
                  }
                  setBasket(arr);

                })
              }
              
              console.log(basket);
            }}
            key={index}
            title={eleman.title} 
            image={eleman.image} 
            info={eleman.info} />
            );
        })
      }
    
    </div>
    <div className='shoppingbasket'>
      <h2>Shopping Basket</h2>
      <ul className='shopbasket'>
        {
          basket.map((eleman,index)=>{
            return <li>
              {eleman.title + "----->"+eleman.info + "Adet:"+eleman.adet}
            </li>;
          })
        }
        
      </ul>
      {
        basket.length>0 ? <button onClick={()=>{
          setBasket([]);
        }}>Clear</button> : <h2>Your basket is empty.</h2>
      }
    </div>
  </div>

}

export default App;
