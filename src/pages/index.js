import React from "react";
import { graphql } from "gatsby";

import Footer from "components/footer";
import Header from "components/header";
import Layout from "components/layout";
import Newsletter from "components/newsletter";
import Projects from "components/projects";
import Posts from "../components/posts";

import "styles/index.css";
import "styles/libraries.css";

const IndexPage = ({ data, ...props }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;
  return (
    <div className="grid">
      <Header />
      <Layout>
        <Posts edges={edges} />
        <Projects />
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___tags] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            tags
            title
            relative
          }
        }
      }
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
