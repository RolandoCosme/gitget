$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $("tbody").empty();
        for(var i = 0; i < commits.length; i++) {
          $("tbody").append( buildTableRow ( commits [ i ] ));
        }
      }
    })
  });

  function buildCommitsGroup(commitDataGroup) {
    var commitsApiUrl = "https://api.github.com/repos/rolandocosme/";
     commitsApiUrl += commitData.name + "/";
     commitsApiUrl += "commits/";
   //  console.log (commitsApiUrl);
}

  // function buildTableRow(commitData) {
  //   var dateTd = $("<td>").append(commitData.commit.author.date);
  //   // var emailTd = $("<td>").append(commitData.author.email);
  //   // var messageTd = $("<td>").append(commitData.commit.message);
  //   // var dateTd = $("<td>").append(commitData.commit.author.date);

  //   return $("<tr>").append(dateTd)
  //     // .append(emailTd)
  //     // .append(messageTd)
  //     //.append(dateTd);
  // }
});