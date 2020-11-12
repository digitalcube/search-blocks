import React  from 'react'
import { InstantSearchSaveComponent } from './block.interfaces'


export const Save: InstantSearchSaveComponent =  ({
    attributes: {
        appId,
        searchOnlyApiKey,
        listLayout,
        gridColumns,
        indexName,
        displayPostAuthor,
        displayPostCategory,
        displayPostContentRadio,
        displayPostDate,
        displayPostTags,
        excerptLength,
    }
}) => (
    <div
        id="aib-instantsearch"
        data-app-id={appId}
        data-searchonly-api-key={searchOnlyApiKey}
        data-list-layout={listLayout}
        data-grid-columns={gridColumns}
        data-index-name={indexName}
        data-display-post-author={displayPostAuthor}
        data-display-post-categories={displayPostCategory}
        data-display-post-content-type={displayPostContentRadio}
        data-display-post-date={displayPostDate}
        data-display-post-tags={displayPostTags}
        data-excerpt-length={excerptLength}
    />
)