import React, {Component} from 'react';
import Favorite from './favorite';
import uuid from 'uuid';


const Pokemon = (props) => {
    return (
        <div className="Pokemon">

            <div className="Pokemon-header">
                <img className="Pokemon-front" src={props.sprites.front_default}/>
                <h2 className="">{props.name[0].toUpperCase() + props.name.substring(1)}</h2>
                <img className="Pokemon-back" src={props.sprites.back_default}/>
            </div>

            <table className="table">
                <tbody>
                <tr>
                    <td>Types</td>
                    <td>{props.types.map(item => {
                        return <span key={item.type.url}
                                     className="badge">{item.type.name}</span>
                    })}</td>
                </tr>
                <tr>
                    <td>Abilities</td>
                    <td>{props.abilities.map(item => {
                        return <span key={item.ability.url}
                                     className="badge">{item.ability.name}</span>
                    })}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>{props.weight}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{props.height}</td>
                </tr>


                {props.stats.map(item => {
                    return (
                        <tr key={uuid()}>
                            <td>{item.stat.name[0].toUpperCase() + item.stat.name.substring(1)}</td>
                            <td>{item.base_stat}</td>
                        </tr>
                    )
                })}

                </tbody>
            </table>

            <Favorite pokemon={props}/>
        </div>
    )
};

export default Pokemon;