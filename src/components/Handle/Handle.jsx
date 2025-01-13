import { useState } from 'react';

const ClickCounter = () => {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return (
        <button onClick={handleClick}> Current:{clicks}</button>
    );
};


export default ClickCounter;

{//--------------------------------------------------}
    /*const ClickCounter = () => {
	return <button onClick={handleClick}>Current: {clicks}</button>
};

const App = () => {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
			<ClickCounter />
			<ClickCounter />
    </>
  );
};
*/}