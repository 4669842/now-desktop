// Packages
import React from 'react'
import getLicenses from 'load-licenses'

// Helpers
import remote from '../utils/electron'

const loadLicenses = () => getLicenses(remote.process.mainModule)

const Licenses = () => (
  <section>
    {loadLicenses().map((item, index) => {
      return (
        item.name.includes('now-desktop') ||
        <details key={index}>
          <summary>{item.name}</summary>
          <p>{item.license}</p>
        </details>
      )
    })}
    <style jsx>
      {`
      details {
        margin-bottom: 10px;
      }

      p {
        font-size: 13px;
        line-height: 19px;
      }

      summary {
        color: #707070;
        font-size: 12px;
        cursor: pointer;
        transition: color .2s ease;
        display: inline-block;
      }

      summary:focus {
        outline: none;
      }

      summary:hover {
        color: #000;
      }

      details[open] summary {
        color: #000;
      }
    `}
    </style>
  </section>
)

export default Licenses
