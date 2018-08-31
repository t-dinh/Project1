import React, { Component } from 'react';
class Cannolis extends Component {

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1 ><img src="./components/logo2.png" /></h1>
                </div>

                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                Login <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">

                                <div className="form-group">
                                    <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-default" onClick={() => console.log('click')} >Sign in</button>
                                </div>

                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">New around here? Sign up</a>
                                <a className="dropdown-item" href="#">Forgot password?</a>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sumbit a Recipe</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Browse Recipes
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Low Calorie</a>
                                        <a className="dropdown-item" href="#">Vegetarian</a>
                                        <a className="dropdown-item" href="#">Pastas</a>
                                        <a className="dropdown-item" href="#">Chicken</a>
                                        <a className="dropdown-item" href="#">Desserts</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>

                <div className="row">
                    <div className="col" >
                        <h2 class="ingredients-header">5-Ingredient Cannolis<button type="button" class="btn btn-outline-success btn-sm toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
                            Favorite </button></h2>

                        <div>
                        Homemade 5-Ingredient Cannolis are impressive and SO easy!</div>
                        <h3 class="ingredients-header">Ingredients</h3>
                        <ul>
                            <li>8 cannoli shells, homemade or store bought will work</li>
                            <li>2 cups ricotta cheese</li>
                            <li>1 cup confectioners' sugar, plus extra for dusting</li>
                            <li>3/4 cup mini chocolate chips, divided</li>
                            <li>1 and 1/2 teaspoons pure vanilla extract</li>
                        </ul> 
                
                        <div>
                            <h3 class="ingredients-header">Directions</h3>
                            <ol>
                                <li>Place the ricotta cheese into a fine mesh strainer and place it in the fridge to drain for at least 12 hours and up to 24 hours.</li>
                                <li>When you're ready to make the filling:</li>
                                <li>In a large bowl combine the drained ricotta cheese, confectioners' sugar, 1/4 cup of the mini chocolate chips, vanilla extract, and orange zest (if using); mix well. Using a spatula, carefully scrape the mixture into pastry bag fitted with a 1/2 inch open tip. Use at once, or refrigerate until needed; filling can be made up to 24 hours in advance.</li>
                                <li>When ready to serve, pipe the filling into one end of cannoli shell, filling shell halfway, then pipe into other end. If you don't have a piping bag, you may spoon the filling into the shells. Repeat with remaining shells.</li>
                                <li>Place remaining mini chocolate chips on a small plate. Dip each end of the cannoli into the chocolate chips, then lightly dust with confectioner's sugar. Serve at once.</li>
                            </ol>
                        </div>

                    </div>

                    <div className="col" id="ingredients-box">

                        <img className="recipe-picture" src="https://bakerbynature.com/wp-content/uploads/2016/11/untitled-67-of-101.jpg"></img>
                    </div>

                </div>



            </div>

        )
    }
}


export default Cannolis;