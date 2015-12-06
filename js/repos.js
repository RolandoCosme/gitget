$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/rolandocosme/repos",
    success: function(repos) {
      for(var i = 0; i < repos.length; i++) {
        var newListItem = buildListGroup(repos[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("Something went wrong. We are looking into it!");
    }
  });

  function buildListGroup(repoData) {
    var reposApiUrl = "https://api.github.com/users/rolandocosme/repos";
    // reposApiUrl += repoData.owner.login + "/";
    // reposApiUrl += repoData.name + "/repos";

    var newLink = $("<a>")
      .attr("href", reposApiUrl)
      .addClass("list-group-item")
      .append(repoData.full_name);
    return newLink;
  }
});

//   function buildCommitsGroup(commitData) {
//     var commitsApiUrl = "https://api.github.com/repos/rolandocosme/";
//      commitsApiUrl += commitData.name + "/";
//      commitsApiUrl += "git/commits/";
//      commitsApiUrl += "3ff610c2687cf6f717784a4146d80e49d89e77f0";
   

//     var newLink = $("<a>")
//       .attr("href", reposApiUrl)
//       .addClass("list-group-item")
//       .append(repoData.full_name);
//     return newLink;
//   }
// });


// github aip token  3ff610c2687cf6f717784a4146d80e49d89e77f0
// 3ff610c2687cf6f717784a4146d80e49d89e77f0
// curl https://api.github.com/?access_token=3ff610c2687cf6f717784a4146d80e49d89e77f0
// curl https://api.github.com/users/rolandocosme

//GET /repos/:owner/:repo/git/commits/:sha

// https://api.github.com/repos/rolandocosme/bootstack/git/commits/3ff610c2687cf6f717784a4146d80e49d89e77f0