*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --dark-grey: #1b1b32;
  --grey:#A99F96;
  --light-grey: #f5f6f7;
  --black: #000;
  --white: #fff;
  --grey: #3b3b4f;
  --golden-yellow: #fecc4c;
  --yellow: #ffcc4c;
  --gold: #feac32;
  --orange: #ffac33;
  --dark-orange: #f89808;
  --pastel:#945D5E;
  --siren:#37123C;
  --peach: #DDA77B;
}

body {
  background-color: var(--grey);
}

.title {
  color: var(--light-grey);
  text-align: center;
  margin: 50px auto;
}

#trip-card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.trip-card {
  background-color: var(--peach);
  padding: 25px;
  text-align: center;
  border-radius: 30px;
  margin: 20px 10px;
}

.trip-price {
  font-size: 1.4rem;
  margin:15px;
  color:var(--white);
  border:2px solid var(--siren);
  border-radius:55px;
}

.btn {
  display: block;
  cursor: pointer;
  width: 100px;
  color: var(--dark-grey);
  background-color: var(--gold);
  background-image: linear-gradient(var(--golden-yellow), var(--orange));
  border-color: var(--gold);
  border-width: 3px;
}

.btn:hover {
  background-image: linear-gradient(var(--yellow), var(--dark-orange));
}

#cart-btn {
  position: absolute;
  margin: 25px 20px; 
  top: 0;
  right: 0;
  border-radius:12px;
  padding:8px 10px;
  background: var(--pastel);
  border:2px solid var(--white);
  color:white;
}
#cart-btn:hover {
  background: var(--siren);
  border:2px solid var(--white);
  height:10%;
  width:10%;
}

.add-to-cart-btn {
  margin: 30px auto 10px;
}

#cart-container {
  display: none;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: var(--light-grey);
  width: 200px;
  height: 400px;
  border: 15px double var(--black);
  border-radius: 15px;
  text-align: center;
  font-size: 1.2rem;
  overflow-y: scroll;
}

.cruise {
  margin: 25px 0;
}

.cruise-count {
  display: inline-block;
  margin-right: 10px;
}

.cruise-duration {
  margin: 10px 0;
}

@media (min-width: 768px) {
  #trip-card-container {
    flex-direction: row;
  }

  .trip-card {
    flex: 1 0 21%;
  }

  #cart-container {
    width: 300px;
  }
}
