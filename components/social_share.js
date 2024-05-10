
import React from 'react'
import { FacebookMessengerShareButton, FacebookMessengerIcon, RedditShareButton, RedditIcon, TwitterShareButton, XIcon, FacebookShareButton, LinkedinShareButton, FacebookIcon, LinkedinIcon } from 'react-share'
import { Flex, Box, Image, Heading, chakra, } from '@chakra-ui/react'
import { List, ListItem, ListIcon, OrderedList, UnorderedList,} from '@chakra-ui/react'
import classes from './social_share.module.css'

const SocialShare = ({url, title}) => {

    return(

<Flex justifyContent="center" mt="4" className={classes.custom_social_icon_container}>
                <FacebookShareButton url={url} quote={title} className={classes.custom_social_icon}>
                  <FacebookIcon round={false} />
                </FacebookShareButton>
                <FacebookMessengerShareButton url={url} quote={title} className={classes.custom_social_icon}>
                  <FacebookMessengerIcon round={false} />
                </FacebookMessengerShareButton>
                <TwitterShareButton url={url} title={title} className={classes.custom_social_icon}>
                  <XIcon round={false} />
                </TwitterShareButton>
                <LinkedinShareButton url={url} title={title} className={classes.custom_social_icon}>
                  <LinkedinIcon round={false} />
                </LinkedinShareButton>
                <RedditShareButton url={url} title={title} className={classes.custom_social_icon}>
                  <RedditIcon round={false} />
                </RedditShareButton>
              </Flex>

    )
}


export default SocialShare