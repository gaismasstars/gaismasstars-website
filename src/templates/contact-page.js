import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const ContactPageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <ContactPageContent className="content" content={content} />
            </div>
          </div>
        </div>

  
  
          <div className="column is-5 is-offset-2 map">
            <iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=P%C4%93rnavas%20iel%C4%81%2062%20R%C4%ABga&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed&language=lv;' frameborder='0' scrolling='no'   gestureHandling='greedy' marginheight='0' marginwidth='0'><div class="zxos8_gm"><a rel="nofollow"  href="https://www.mummy2monkeys.co.uk">Mummy blog</a></div><div className="ovhidden"><div className="hundred" id='gmap_canvas'></div></div></iframe>
          </div>
   
        </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
