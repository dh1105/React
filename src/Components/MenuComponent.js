import React, {Component} from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
//import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent.js';

class Menu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log("Constructor called");
    }

    componentDidMount(){
        console.log("componentDidMount method called");
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
      }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {

        console.log("Render method called");
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div> */}
                <DishDetail selectedDish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;