import { Component } from "react";
import {Row, Col} from 'reactstrap';
import CategoryList from '../components/categories/CategoryList';
import ProductList from '../components/products/ProductList';




export default class Dashboard extends Component{



    render(){


        return(
            <>


            <Row>
<Col xs="3"><CategoryList/></Col>
<Col xs="9"><ProductList/></Col>
            </Row>
            
            
            
            
            </>
        )
    }
}