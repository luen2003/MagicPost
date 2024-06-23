import React from 'react'

const Register = () => {
  return (
    <>
            <div class="form-container">

                <form action="" method="post">
                    <h3>Log In</h3>
                    <input type="text" name="name" required placeholder="enter username" class="box"/>
                        <input type="password" name="password" required placeholder="enter password" class="box"/>
                            <input type="submit" name="submit" class="btn" value="register now"/>
                                <p>Have an account? <a href="/login">Login</a></p>
                            </form>

                        </div>
                    </>
  )
}

export default Register