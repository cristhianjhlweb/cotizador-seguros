import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { primeraLetraMayuscula } from '../helper'

const ContenedorResument = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos

    if(marca === '' || year === '' || plan === '') return null

    return ( 
        <ContenedorResument>
            <h2>Resumen de la Cotización</h2>
            <ul>
                <li>Marca: {primeraLetraMayuscula(marca)}</li>
                <li>Plan: {primeraLetraMayuscula(plan)}</li>
                <li>Año: {year}</li>
            </ul>
        </ContenedorResument>
    )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen