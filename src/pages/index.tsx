import React from 'react'
import Layout from '../components/layout'
import {styled} from '../styles/theme'
import ColorPanel from '../components/colorPanel'

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
        <CanvasHost>
          <ColorPanel />
        </CanvasHost>
      </article>
    </Layout>
  )
}

export default index
