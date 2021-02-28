import { useState, useEffect } from 'react';

const BtcPrice = () => {
  const [btcPrice, setBtcPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  const getBtcPrice = () => {
    setTimeout(() => {
      setBtcPrice(50000)
      setLoading(false);
    }, 2000)
  };

  useEffect(() => {
    getBtcPrice();
  }, []);

  useEffect(() => {
    if (!loading) {
      alert('We got the Btc data!');
    }
  }, [loading]);

  // useEffect(() => {
  //   const unsubscribe = subscribe();
  //   return(
  //     () => {
  //       unsubscribe();
  //     }
  //   );
  // });

  return (
    <div style={{ padding: 20 }}>
      {loading ?  'loading' : `The price of bitcoin is: ${btcPrice} USD`}
    </div>
  );
};

export default BtcPrice;
