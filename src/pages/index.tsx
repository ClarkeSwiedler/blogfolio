import React, {useState} from 'react'
import Layout from '../components/layout'
import {styled} from '../styles/theme'
import ColorPanel from '../components/colorPanel'
import {Color, RGB} from '../util/color'
import GradientGenerator from '../components/gradientGenerator'

const CanvasHost = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const index = () => {
  return (
    <Layout>
      <article>
        <GradientGenerator />
      </article>
    </Layout>
  )
}

export default index
