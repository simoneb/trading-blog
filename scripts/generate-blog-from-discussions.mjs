import dotenv from "dotenv";

dotenv.config();

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Octokit } from "octokit";
import slugify from "slugify";
import fs from "fs/promises";
import pkg from "../package.json" assert { type: "json" };

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
const [owner, repo] = pkg.repository.split("/");

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = `${__dirname}/../blog`;

const { repository: { discussions: { nodes: discussions } } } = await octokit.graphql(`
query ($owner: String!, $name: String!) { 
  repository(owner: $owner name: $name) {
    discussions(first: 100) {
      nodes {
        title
        labels(first: 100) {
          nodes {
            name
          }
        }
        category {
          name
        }
        url
        createdAt
        body
      }
    }
  }
}`, { owner, name: repo });

for(const discussion of discussions) {
  const slug = slugify(discussion.title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  const fileName = `${blogDir}/${slug}.md`;

  await fs.writeFile(fileName, `---
slug: ${slug}
title: ${discussion.title}
date: ${discussion.createdAt}
tags: ${discussion.labels?.nodes.map(label => label.name).join(", ") || '[]'}  
---

${discussion.body}
  `)
}
