import React, { FC } from 'react'
import ittyni from '../../../ittyni'
import styled from '../../styled-components'

interface Props {

}

export const Search: FC = ({ }: Props) => {
    return (
        <ittyni.ui.Box.SearchBox>
            <Button><span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" 
                 style={{width: "1.125rem", height: "1.125rem"}}>
                    <path d="M20.6 18.4l-4.5-4.5c-.1-.1-.1-.1-.2-.1.7-1.1 1.1-2.4 1.1-3.8 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.4 0 2.7-.4 3.8-1.1l.1.2 4.5 4.5c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.5-.6.5-1.6 0-2.2zM5 10c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"></path>
                    </svg>
                    </span></Button>search box
        </ittyni.ui.Box.SearchBox>
    )
}

const Button = styled('button')`
display: inline-block;
    margin: 0;
    padding: .375rem 1.125rem;
    border: 0;
    border-radius: .25rem;
    background-image: linear-gradient(-180deg,#00a698,#00a698);
    background-image: linear-gradient(-180deg,var(--bpk-button-primary-gradient-start-color,#00a698),var(--bpk-button-primary-gradient-end-color,#00a698));
    font-weight: 700;
    line-height: 1.5rem;
    text-align: center;
    text-decoration: none;
    box-shadow: none;
    cursor: pointer;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #fff;
    color: var(--bpk-button-primary-text-color,#fff);
    background-color: #00a698;
    background-color: var(--bpk-button-primary-background-color,#00a698);
    font-size: 1.1875rem;
    font-size: var(--bpk-button-font-size,1.1875rem);
    span {
        line-height: 1.125rem;
    display: inline-block;
    margin-top: 0.1875rem;
    vertical-align: top;
    }
`