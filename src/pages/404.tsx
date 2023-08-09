import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404</h1>
    <p>Mohon maaf, halaman yang Anda cari tidak ditemukan(</p>
  </Layout>
)

export default NotFound
