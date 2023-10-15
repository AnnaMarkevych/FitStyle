import * as React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {useState} from 'react';

import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {Trainers} from './pages/Trainers';
import {Challenges} from './pages/Challenges';
import {Programs} from './pages/Programs';
import {Favorites} from './pages/Favorites';
import {Store} from './pages/Store';
import {Nutrition} from "./pages/Nutrition";
import {Category} from "./pages/Category";
import {SubCategory} from "./pages/SubCategory";
import {ItemPage} from "./pages/ItemPage";
import {BasketList} from "./components/BasketList";
import {Overlay} from './components/Overlay';
import {NutritionDiet} from './components/Nutrition/NutritionDiet';
import {ProgramList} from './pages/ProgramList';
import {TrainerPage} from './pages/TrainerPage';



function App() {
    const [order, setOrder]= useState([]);
    const [orderFav, setOrderFav] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [isSize, setIsSize] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const paginate = (pageNumber) => { setCurrentPage(pageNumber) };



    const getSize = (size) => {
        setIsSize(true);
        setSelectedSize(size);
    };

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id && orderItem.size === item.size);
        if (itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem])
        } else {
            const  newOrder = order.map((orderItem, index) => {
                            if(index === itemIndex) {
                                return {
                                    ...orderItem,
                                    quantity: orderItem.quantity + 1
                                }
                            } else {
                                return orderItem;
                            }
                        });

            setOrder(newOrder);
        }

    };

    const addToFavorite = (item) => {
        if (!isFavorite(item.id)){
            setOrderFav([...orderFav, item])
        }
    };

    const isFavorite = (id) => {
        const itemIndex = orderFav.findIndex(orderFavItem => orderFavItem.id === id);
        if (itemIndex < 0){
            return false;
        }
        return true;
    };

    const removeFromFavorite = (id) => {
        const newOrderFav = orderFav.filter((item) => {
            return (item.id !== id)
        });
        setOrderFav(newOrderFav);
        console.log('remove' + id)
    };

    const incQuantity = (itemId, itemSize) => {
        const newOrder = order.map(el => {
            if (el.id === itemId && el.size === itemSize){
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (itemId, itemSize) => {
        const newOrder = order.map(el => {
            if (el.id === itemId && el.size === itemSize){
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >=0 ? newQuantity: 0,
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const removeFromBasket = (itemId, itemSize) => {
        const newOrder = order.filter((item) => {
            return (item.id !== itemId || item.size !== itemSize)
        });
        setOrder(newOrder);
    };

    const handleBasketShow = () =>{
        setBasketShow(!isBasketShow);
    };


  return (
    <div className="App">
        <Router>
      <Header order={order}
              setOrder={setOrder}
              handleBasketShow={handleBasketShow}
              orderFav={orderFav}
              setOrderFav={setOrderFav}
      />

        <main className='content'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/trainers' element={<Trainers />}/>
                <Route path='/trainers/:id' element={<TrainerPage />}/>
                <Route path='/programs/trainers/:id' element={<TrainerPage />}/>
                <Route path='/trainers/:id/:name' element={<ProgramList />}/>

                <Route path='/challenges' element={<Challenges />}/>

                <Route path='/programs' element={<Programs />}/>
                <Route path='/programs/:name' element={<Category />}/>
                <Route path='/programs/:name/:name' element={<ProgramList />}/>

                <Route path='/nutrition' element={<Nutrition />}/>
                <Route path='/nutrition/nutritionDiet' element={<NutritionDiet />}/>

                <Route path='/store' element={<Store />}/>
                <Route path='/store/:name' element={<Category />}/>
                <Route path='/store/:name/:name' element={<SubCategory addToBasket={addToBasket}
                                                                       getSize={getSize}
                                                                       isSize={isSize}
                                                                       selectedSize={selectedSize}
                                                                       addToFavorite={addToFavorite}
                                                                       isFavorite={isFavorite}
                                                                       removeFromFavorite={removeFromFavorite}
                                                                       firstItemIndex={firstItemIndex}
                                                                       itemsPerPage={itemsPerPage}
                                                                       lastItemIndex={lastItemIndex}
                                                                       paginate={paginate}
                                                                       />}/>
                <Route path='/store/:name/:name/:id' element={<ItemPage addToBasket={addToBasket}
                                                                        addToFavorite={addToFavorite}
                                                                        handleBasketShow={handleBasketShow}
                                                                        getSize={getSize}
                                                                        isSize={isSize}
                                                                        selectedSize={selectedSize} />}/>
                <Route path='/favorites/:id' element={<ItemPage addToBasket={addToBasket}
                                                                        addToFavorite={addToFavorite}
                                                                        handleBasketShow={handleBasketShow}
                                                                        getSize={getSize}
                                                                        isSize={isSize}
                                                                        selectedSize={selectedSize} />}/>
                <Route path='/favorites' element={<Favorites orderFav={orderFav}
                                                             addToBasket={addToBasket}
                                                             getSize={getSize}
                                                             isSize={isSize}
                                                             selectedSize={selectedSize}
                                                             addToFavorite={addToFavorite}
                                                             isFavorite={isFavorite}
                                                             removeFromFavorite={removeFromFavorite}
                                                             firstItemIndex={firstItemIndex}
                                                             itemsPerPage={itemsPerPage}
                                                             lastItemIndex={lastItemIndex}
                                                             paginate={paginate} />}/>
                </Routes>
            { isBasketShow && <BasketList order={order}
                                          handleBasketShow={handleBasketShow}
                                          removeFromBasket={removeFromBasket}
                                          incQuantity={incQuantity}
                                          decQuantity={decQuantity}/>}
            { isBasketShow && <Overlay handleBasketShow={handleBasketShow}/>}
        </main>
            <Footer />
        </Router>

    </div>
  );
}

export default App;
