'use strict';


/**
 * 게시글 삭제
 *
 * body BoardDeleteRequest 
 * returns String
 **/
exports.deleteBoardPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 게시글 목록 요청 - 오름차순
 *
 * pageable Pageable 
 * returns List
 **/
exports.getAllBoardsASC = function(pageable) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
}, {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 게시글 목록 요청 - 내림차순
 *
 * pageable Pageable 
 * returns List
 **/
exports.getAllBoardsDESC = function(pageable) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
}, {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 유저별 게시글 목록 요청 - 내림차순
 *
 * pageable Pageable 
 * userId String 
 * returns List
 **/
exports.getBoardsByUserId = function(pageable,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
}, {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 게시글 작성
 *
 * body BoardWriteRequest tagName의 경우 같은 이름의 태그 존재 시 기존 태그 ID가 등록되며, 새로운 태그면 새로 태그 생성 후 해당 ID 등록
 * returns Integer
 **/
exports.insertBoard = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 제목 및 내용으로 게시글 검색 - 내림차순
 *
 * pageable Pageable 
 * text String 
 * returns List
 **/
exports.searchBoard = function(pageable,text) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
}, {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 태그id로 게시글 검색 - 내림차순
 *
 * pageable Pageable 
 * tagId Integer 
 * returns List
 **/
exports.searchBoardByTagId = function(pageable,tagId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
}, {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 게시글 수정
 *
 * body BoardUpdateRequest 태그 수정시 주의사항:<br>태그 추가 시 tagName 배열에 추가할 것<br>기존 태그의 삭제 여부와 상관없이 그대로 tagId 배열에 넣을 것<br>ex)현재글의 태그 목록 [1, 2, 3]에서 3을 삭제 후 '게임' 태그 추가시 -> tagId[1, 2], tagName['게임']
 * no response value expected for this operation
 **/
exports.updateBoard = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 게시글 상세 요청
 *
 * boardId Integer 
 * returns BoardResponse
 **/
exports.viewBoard = function(boardId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "board" : {
    "writeDate" : "2000-01-23T04:56:07.000+00:00",
    "boardId" : 0,
    "title" : "title",
    "partyId" : 6,
    "userId" : "userId",
    "content" : "content",
    "views" : 1
  },
  "party" : {
    "total" : 6,
    "current" : 1,
    "partyId" : 0,
    "isActive" : true
  },
  "tags" : [ {
    "tagId" : 0,
    "tagName" : "tagName"
  }, {
    "tagId" : 0,
    "tagName" : "tagName"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

