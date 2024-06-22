import React from 'react'

const Login = () => {
    return (
    <>
            <div class="form-container">

                <form action="" method="post">
                    <h3>Log In</h3>
                    <input type="text" name="name" required placeholder="enter username" class="box"/>
                        <input type="password" name="password" required placeholder="enter password" class="box"/>
                            <input type="submit" name="submit" class="btn" value="login now"/>
                                <p>Don't have an account? <a href="register.php">Sign up</a></p>
                            </form>

                        </div>
                    </>
                    )
}

export default Login