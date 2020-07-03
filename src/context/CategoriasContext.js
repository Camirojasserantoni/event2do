import React, { Component } from 'react';
import axios from 'axios';

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token='ROBEON7VQ2FE3HQ7UJVT'

    state = { 
        categorias : []
     }


    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {

        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categorias = await axios.get(url);

        this.setState({
            categorias : categorias.data.categorias
        })
    }

    render() { 
        return ( 
    
        <CategoriasContext.Provider 
            value={{
                categorias : this.state.categorias
            }}
        >
            {this.props.children}
        </CategoriasContext.Provider>
    );
  }
}
 
export default CategoriasProvider;