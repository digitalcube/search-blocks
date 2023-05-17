# Search Blocks

## Getting started

```bash
% git clone https://github.com/digitalcube/search-blocks.git
% cd search-blocks
% npm install
% npm run postinstall
% npm start
```

## Start WordPress using wp-env

We can control a local WordPress by these command.

```bash
# Start WordPress
% npm run wp:start

# Setup WordPress
% npm run wp:stop

# Delete WordPress
% npm run wp:destroy

# Execute WP-CLI on the WordPress container
% npm run wp:cli help
```

## Release

```bash
% git pull origin main
% npm version [major|minor|patch]
# Update the plugin version
% vim search-blocks.php
# Update changelog
% vim readme.txt
% git push origin main --tags
```

When push the latest tag and publish the release in GitHub, the GitHub action will release the plugin to wp.org automatically.