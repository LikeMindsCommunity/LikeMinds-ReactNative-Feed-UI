import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {LMPostFooter, LMPostHeader, LMPostMedia, LMText} from './src';

export default function App() {
  const posts = [
    {
      Id: '64ef3483abad2c01965fb31b',
      attachments: [
        {
          attachmentMeta: {
            entityId: '000000000000000000000000',
            format: 'jpg',
            name: 'landscape2.jpg',
            ogTags: {},
            size: 5017791,
            url: 'https://beta-likeminds-media.s3.ap-south-1.amazonaws.com/files/post/siddharth-1/long.jpg',
          },
          attachmentType: 1,
        },
      ],
      commentsCount: 25,
      communityId: 50489,
      createdAt: 1693398147312,
      heading: '5 tips to position your community beyond just an online group',
      isEdited: false,
      isLiked: false,
      isPinned: true,
      isSaved: true,
      likesCount: 3,
      menuItems: [
        {
          id: 5,
          title: 'Edit Post',
        },
        {
          id: 3,
          title: 'Unpin This Post',
        },
        {
          id: 1,
          title: 'Delete Post',
        },
      ],
      tempId: null,
      text: '5 tips to position your community beyond just an online group',
      topics: null,
      updatedAt: 1693405107922,
      userId: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
      uuid: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
    },
    {
      Id: '6517daa89110701a7590258d',
      attachments: [
        {
          attachmentMeta: {
            entityId: '000000000000000000000000',
            ogTags: {
              title: 'Tap to open the website url',
              url: 'https://www.google.com',
              description:
                "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for",
              image:
                'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
            },
          },
          attachmentType: 4,
        },
      ],
      commentsCount: 0,
      communityId: 50489,
      createdAt: 1696062120497,
      heading: '5 tips to position your community beyond just an online group',
      isEdited: false,
      isLiked: false,
      isPinned: false,
      isSaved: false,
      likesCount: 1,
      menuItems: [
        {
          id: 5,
          title: 'Edit Post',
        },
        {
          id: 2,
          title: 'Pin This Post',
        },
        {
          id: 1,
          title: 'Delete Post',
        },
      ],
      tempId: null,
      text: 'URL: https://betaauth.likeminds.community/feed/post/65008bfe397ac4b1a178d1f2/like Method: PUT Protocol: h2 Status: Complete Response: 200  SSL: Yes <<user_name|route://user_profile/user_unique_id>>   Request time: Fri Sep 15 10:18:05 GMT+05:30 2023 Response time: Fri Sep 15 10:18:06 GMT+05:30 2023 Duration: 542 ms  Request size: 0 B Response size: 16 B Total size: 16 B  ---------- Request ----------  x-platform-code: an x-sdk-source: feed x-version-code: 6 sentry-trace: aa31dbc2cb794591b8dc093acadc1240-de5cda7d25984211 baggage: sentry-environment=beta,sentry-public_key=5802d81a53354c2593a6683813e26f78,sentry-release=2.9.2,sentry-trace_id=aa31dbc2cb794591b8dc093acadc1240 Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjZmNDAzNmZhLTQxNGUtNGMwYS1hOTRlLTAzOTEwODZlM2JiMCIsImFwaV9rZXkiOiI1ZjU2N2NhMS05ZDc0LTRhMWItYmU4Yi1hN2E4MWZlZjc5NmYiLCJleHAiOjE2OTQ3NTY4ODUsInVzZXJfdW5pcXVlX2lkIjoiYWNhMDQ0NjktNGZkZS00NTkzLTgzNGQtZjc5MzEyNDRkMmYxIn0.J_wtSJ6Fj61Ra4htfDzWzDdpXA_VxjxDgH1AJug3zQc  (body is empty)  ---------- Response ----------  content-type: application/json; charset=utf-8 date: Fri, 15 Sep 2023 04:48:06 GMT content-length: 16 via: 1.1 google alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000  {   "success": true }',
      topics: [],
      updatedAt: 1696062120507,
      userId: 'f3d8a4c6-0f54-4d92-ab5f-0aa14b425f40',
      uuid: 'f3d8a4c6-0f54-4d92-ab5f-0aa14b425f40',
    },
  ];
  const users = {
    'e0acf1d9-7457-4c2c-bf2d-9e4497102df5': {
      customTitle: '',
      id: 89026,
      imageUrl: '',
      isDeleted: false,
      isGuest: false,
      name: 'Siddharth-1',
      questionAnswers: null,
      sdkClientInfo: {
        community: 0,
        user: 1,
        userUniqueId: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
        uuid: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
      },
      userUniqueId: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
      uuid: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
    },
    'f3d8a4c6-0f54-4d92-ab5f-0aa14b425f40': {
      customTitle: '',
      id: 90602,
      imageUrl: '',
      isDeleted: false,
      isGuest: false,
      name: 'Ishaan',
      questionAnswers: null,
      sdkClientInfo: {
        community: 0,
        user: 1,
        userUniqueId: 'f3d8a4c6-0f54-4d92-ab5f-0aa14b425f40',
        uuid: 'f3d8a4c6-0f54-4d92-ab5f-0aa14b425f40',
      },
      userUniqueId: 'f3d8a4c6-0f54-4d92-ab5f-0aa14b425f40',
      uuid: 'f3d8a4c6-0f54-4d92-ab5f-0aa14b425f40',
    },
  };
  const final = [
    {
      Id: '64ef3483abad2c01965fb31b',
      attachments: [
        {
          attachmentMeta: {
            entityId: '000000000000000000000000',
            format: 'jpg',
            name: 'landscape2.jpg',
            ogTags: {},
            size: 5017791,
            url: 'https://beta-likeminds-media.s3.ap-south-1.amazonaws.com/files/post/siddharth-1/landscape2.jpg',
          },
          attachmentType: 1,
        },
      ],
      commentsCount: 25,
      communityId: 50489,
      createdAt: 1693398147312,
      heading: '',
      isEdited: false,
      isLiked: false,
      isPinned: true,
      isSaved: true,
      likesCount: 3,
      menuItems: [
        {
          id: 5,
          title: 'Edit Post',
        },
        {
          id: 3,
          title: 'Unpin This Post',
        },
        {
          id: 1,
          title: 'Delete Post',
        },
      ],
      tempId: null,
      text: '',
      topics: null,
      updatedAt: 1693405107922,
      userId: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
      uuid: 'e0acf1d9-7457-4c2c-bf2d-9e4497102df5',
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: '#e0e0e0'}}>
      {/* //todo: implemented here for testing, will remove later */}
      {/* <LMText text='App'/> */}
      <FlatList
        data={posts}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: 'white', marginBottom: 10}}>
              <LMPostMedia
                attachments={item.attachments}
                imageProps={{height: 450, imageUrl: '', boxFit: 'cover'}}
                linkPreviewProps={{
                  attachments: [],
                  linkPreviewBoxStyle: {
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#E6EBF5',
                    padding: 10,
                  },
                  linkTitleStyle: {
                    fontWeight: '500',
                    color: '#333333',
                    fontSize: 16,
                  },
                  showDescription: false,
                  linkUrlStyle: {
                    fontSize: 12,
                    fontWeight: '400',
                    color: '#484F6777',
                  },
                }}
              />
              <LMPostHeader
                user={users['e0acf1d9-7457-4c2c-bf2d-9e4497102df5']}
                profilePicture={{
                  fallbackText:
                    users['e0acf1d9-7457-4c2c-bf2d-9e4497102df5'].name,
                  size: 50,
                }}
                postMenu={{
                  menuItems: item.menuItems,
                  modalPosition: {x: 0, y: 0},
                  modalVisible: false,
                  onCloseModal: () => {},
                  onSelected: () => {},
                }}
                onTap={() => {}}
                titleText={{
                  text: item.heading,
                  textStyle: {
                    width: '90%',
                    fontWeight: '500',
                    color: '#333333',
                    fontSize: 16,
                  },
                }}
                createdAt={{text: `${item.createdAt}`, textStyle:{color:'#666666'}}}
              />
              <LMPostFooter
                isLiked={item.isLiked}
                isSaved={true}
                likesCount={item.likesCount}
                commentsCount={item.commentsCount}
                showBookMarkIcon={true}
                showShareIcon={true}
                likeIconButton={{
                  icon: {
                    type: 'png',
                    iconStyle: {marginRight: 5},
                    width: 19,
                    height: 19,
                  },
                  onTap: () => {},
                  activeIcon: {
                    type: 'png',
                    iconStyle: {marginRight: 5},
                    width: 19,
                    height: 19,
                  },
                }}
                likeTextButton={{
                  text: {
                    text: '',
                    textStyle: {fontWeight: '400', fontSize: 15},
                  },
                  onTap: () => {},
                }}
                commentButton={{
                  icon: {
                    type: 'png',
                    iconStyle: {marginRight: 5},
                    width: 19,
                    height: 19,
                  },
                  text: {
                    text: '',
                    textStyle: {fontWeight: '400', fontSize: 15},
                  },
                  onTap: () => {},
                }}
                saveButton={{
                  onTap: () => {},
                  icon: {type: 'png', width: 16, height: 16},
                  activeIcon: {type: 'png', width: 16, height: 16},
                }}
                shareButton={{
                  onTap: () => {},
                  icon: {type: 'png', width: 16, height: 16},
                }}
                footerBoxStyle={{alignItems:'center'}}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
