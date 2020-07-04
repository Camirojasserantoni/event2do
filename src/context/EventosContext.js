import React, {Component} from 'react';


const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;


class  EventosProvider extends Component {
      token='ROBEON7VQ2FE3HQ7UJVT'
      ordenar= 'date'

         state = {
           
           }

    getEvents = async(search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

     
    }

    render() { 
        return (  );
    }
}
 
export default EventosProvider;