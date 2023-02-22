import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import Sticker from './sticker.mdx';
import Foot_Sticker from './foot_sticker.mdx';
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({children}) {
  const syntheticTitle = useSyntheticTitle();
  var visitor_url = null; 
  const gmail_url = "hexk0131@gmail.com";
  const kakaotalk_url = "https://open.kakao.com/o/sZ8C643e";
  const instagram_url = "https://www.instagram.com/___o7k/";

  if(typeof window !=='undefined') {
    visitor_url = "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=" + window.location.href
  + "&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false";
  }
  
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <Sticker visitor_url={visitor_url}/>
      <MDXContent>{children}</MDXContent>
      {/* <Foot_Sticker gmail_url={"mailto:" + gmail_url} kakaotalk_url={kakaotalk_url} instagram_url={instagram_url}></Foot_Sticker> */}
      
    </div>
  );
}
