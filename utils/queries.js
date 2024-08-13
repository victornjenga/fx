export const allPostsQuery = () => {
  const query = `*[_type == "sites"] | order(_createdAt desc){
    _id,
    name,
     image,
      userId,
      postedBy->{
        _id,
        userName,
        image
      },
    likes,category,
    description,price,priceone,link,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`

  return query
}

export const postDetailQuery = (postId) => {
  const query = `*[_type == "sites" && _id == '${postId}']{
    _id,
     name,
       image []{
        asset->{
          _id,
          url
        }
      },
      category,
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
     likes,
     description,price,priceone,link,
    comments[]{
      comment,
      _key,
      postedBy->{
        _ref,
      _id,
    },
    }
  }`
  return query
}

export const searchPostsQuery = (searchTerm) => {
  const query = `*[_type == "sites" && name match '${searchTerm}*' || topic match '${searchTerm}*'] {
    _id,
     name,
     image []{
      asset->{
        _id,
        url
      }
    },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
likes,
description,price,priceone,link,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`
  return query
}

export const singleUserQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`

  return query
}

export const allUsersQuery = () => {
  const query = `*[_type == "user"]`

  return query
}

export const userCreatedPostsQuery = (userId) => {
  const query = `*[ _type == 'sites' && userId == '${userId}'] | order(_createdAt desc){
    _id,
     name,
       image{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,
 description,price,priceone,link,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`

  return query
}

export const userLikedPostsQuery = (userId) => {
  const query = `*[_type == 'sites' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
    _id,
     name,
       image{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,
 description,price,priceone,link,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`

  return query
}

export const categoryPostsQuery = (category) => {
  const query = `*[_type == "sites" && category match '${category}*'] {
    _id,
     name,
     image []{
      asset->{
        _id,
        url
      }
    },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,
 description,price,priceone,link,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`

  return query
}
export const AllCategoryPostsQuery = () => {
  const query = `*[_type == "sites" && category ] {
    _id,
     name,
     image []{
      asset->{
        _id,
        url
      }
    },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,
 description,price,priceone,link,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`

  return query
}

