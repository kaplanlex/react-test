import { useId } from "react";

const MyComponent = () => {
    const loginId = useId();
    const passwordId = useId();

    return (
        <form>
            <label htmlFor={loginId}>Login</label>
            <input type="text" name="login" id={loginId} />

            <label htmlFor={passwordId}>Password</label>
            <input type="password" name="password" id={passwordId} />

            <button type="submit">Login</button>
        </form>
    );
};



export default MyComponent;