<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <?php
      $meta = array(
        'title' => 'Exploring biggest spendors, vendors in state technology',
        'description' => 'A Statesman analysis of 3.2 million transactions highlights the vendors and agencies that have made the greatest use of the Texas Department of Information Resources. Our interactive charts the relationships between the 20 agencies and vendors who spent and received the most through the DIR. Combined, they account for about 180,000 transactions worth more than $1.35 billion in sales.',
        'thumbnail' => 'http://projects.statesman.com/news/dir-big-spenders/assets/sankey-mobile.png',
        'url' => 'http://projects.statesman.com/news/dir-big-spenders/',
        'twitter' => 'statesman'
      );
    ?>

    <title>Interactive: <?php print $meta['title']; ?> | Austin American-Statesman</title>
    <link rel="icon" type="image/png" href="//projects.statesman.com/common/favicon.ico">

    <link rel="canonical" href="<?php print $meta['url']; ?>" />

    <meta name="description" content="<?php print $meta['description']; ?>">

    <meta property="og:title" content="<?php print $meta['title']; ?>"/>
    <meta property="og:description" content="<?php print $meta['description']; ?>"/>
    <meta property="og:image" content="<?php print $meta['thumbnail']; ?>"/>
    <meta property="og:url" content="<?php print $meta['url']; ?>"/>

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@<?php print $meta['twitter']; ?>" />
    <meta name="twitter:title" content="<?php print $meta['title']; ?>" />
    <meta name="twitter:description" content="<?php print $meta['description']; ?>" />
    <meta name="twitter:creator:id" content="15464292" />
    <meta name="twitter:creator:id" content="16235644" />
    <meta name="twitter:image:src" content="<?php print $meta['thumbnail']; ?>" />
    <meta name="twitter:url" content="<?php print $meta['url']; ?>" />

    <link href="dist/style.css" rel="stylesheet">

    <link href='http://fonts.googleapis.com/css?family=Lusitana:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Merriweather+Sans:400,300,300italic,400italic,700italic,700,800,800italic' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?php /* CMG advertising and analytics */ ?>
    <?php include "includes/advertising.inc";?>
    <?php include "includes/metrics-head.inc";?>
  </head>
  <body>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="http://www.statesman.com/" target="_blank">
            <img width="273" height="26" src="assets/logo.png" />
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right social hidden-xs">
          <li><a target="_blank" href="https://www.facebook.com/sharer.php?u=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-facebook-square"></i></a></li>
          <li><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo urlencode($meta['url']); ?>&via=<?php print urlencode($meta['twitter']); ?>&text=<?php print urlencode($meta['title']); ?>"><i class="fa fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://plus.google.com/share?url=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-google-plus"></i></a></li>
        </ul>
      </div>
    </nav>

    <article class="container">
      <div class="page-header">
        <h4>Texas state government</h4>
        <h1>Exploring biggest spenders, vendors in state technology</h1>
        <p class="author">Interactive by Andrew Chavez and J. David McSwane, American-Statesman</p>
        <p>More than $9 billion and over 3.2 million transactions have flowed through the Texas Department of Information Resources since fiscal year 2010. All state agencies are required to purchase technology through the department, which is designed to expedite purchases and lower prices by leveraging Texas’ buying power. The process is an easy way for agencies to side-step competitive bidding processes, which can take months and years.</p>
        <p>Officials at the department estimate their contract methods saved $270 million in taxpayer money in 2014 alone.</p>
        <p>The below chart shows the 20 state agencies that spend the most through the department’s so-called cooperative contracts and their relationship with the top 20 vendors who sell goods and services. Combined, they account for about 180,000 transactions worth more than $1.35 billion in sales.</p>
        <p><a href="http://www.mystatesman.com/flist/news/complete-coverage-21ct/fmq/">Related coverage <i class="fa fa-angle-double-right"></i></a></p>
        <?php /**<p><a href="#">Related story ></a></p> **/ ?>
      </div>

      <?php for ($i = 0 ; $i < 5; $i++): ?>
        <?php $tx = rand(10, 90); ?>
        <?php $ty = rand(10, 90); ?>
        <?php $bx = min($tx + rand(10, 20), 100); ?>
        <?php $by = min($ty + rand(10, 20), 100); ?>
        <div class="row person" data-photo="1" data-ne="<?php print $tx; ?>, <?php print $ty; ?>" data-sw="<?php print $bx; ?>, <?php print $by; ?>">
          <div class="col-xs-4">
            <h1>First Last</h1>
            <h2>Hometown, TX [<?php print $tx . ', ' . $ty; ?>], [<?php print $bx . ', ' . $by; ?>]</h2>
          </div>
          <div class="col-xs-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet enim tellus, dignissim accumsan erat fringilla ac. Nullam tortor enim, fermentum non porttitor et, auctor sed nisi. Nullam diam nisl, fermentum at sapien et, aliquam volutpat odio. Nam commodo et velit in rutrum. Pellentesque molestie et metus vel porta. Sed commodo gravida nisi at auctor. Duis blandit molestie magna, eu egestas eros dictum id. Nulla eleifend ipsum urna, at rutrum nisi bibendum ut.</p>
            <p>Sed diam risus, tempor vel felis at, iaculis egestas sem. Phasellus luctus magna vel lobortis accumsan. Etiam fermentum tortor sem, eget tincidunt enim imperdiet quis. Vestibulum a elementum libero, in vestibulum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra molestie enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce mi erat, tristique quis magna ac, suscipit sollicitudin orci. Integer blandit dignissim eros, hendrerit viverra urna. In aliquet purus eget dui varius tincidunt. Praesent scelerisque elit dolor, vel lobortis odio molestie vel. Suspendisse bibendum eget nulla ultrices efficitur. Sed aliquet, risus tristique iaculis tincidunt, diam mauris pretium nisl, vel ullamcorper felis massa ac sapien. Nam in hendrerit lacus.</p>
            <p>Praesent molestie leo tellus, et feugiat arcu finibus quis. Vestibulum scelerisque, velit fringilla facilisis sodales, dolor enim faucibus risus, vitae egestas lectus ante volutpat mauris. Donec nisl magna, fringilla ac mattis sed, consequat vel massa. Nam volutpat cursus orci vitae fringilla. Ut porttitor nibh vel dui consequat, et tincidunt dui tristique. Morbi libero orci, pharetra ac aliquet malesuada, eleifend id odio. Duis diam ex, congue nec faucibus vel, feugiat eu nibh. Proin venenatis nisl sed sapien interdum commodo vitae ac nisi.</p>
            <p>Fusce pulvinar vel ipsum scelerisque pretium. Morbi ultrices tellus eget egestas gravida. Fusce accumsan a ante vitae malesuada. Integer nec viverra eros. Cras justo ipsum, blandit et metus sit amet, fermentum interdum quam. Nam tempor odio id orci viverra viverra. Nullam finibus eget sem sit amet mattis. Curabitur sollicitudin interdum tempor. Nulla finibus finibus est ac viverra. Aliquam sit amet dui auctor, vulputate nunc consectetur, commodo leo. Duis facilisis orci in neque sagittis, non rhoncus urna rhoncus. Pellentesque at sapien vitae neque tincidunt pellentesque vitae vel eros. Cras consectetur cursus urna, vitae suscipit orci auctor et. Nulla ullamcorper dignissim consequat.</p>
            <p>Morbi rutrum vitae neque ut maximus. In sagittis diam ipsum, non pellentesque odio viverra eget. Aliquam vitae gravida risus. Curabitur accumsan libero non elit condimentum, eu porttitor lorem volutpat. Integer vehicula tristique erat. Sed eu convallis quam. Cras dapibus tincidunt tellus luctus porttitor. Praesent ac libero a orci sollicitudin congue. Donec vitae felis velit. Morbi ac risus lobortis tellus vulputate elementum. Ut finibus fermentum eros sit amet commodo. Aenean non ullamcorper mi. Duis nisl erat, commodo sed dictum ut, tempus sed justo. Cras laoreet, nunc vitae consequat mollis, ipsum neque tincidunt nibh, quis mattis neque eros et magna. Phasellus nulla arcu, volutpat et accumsan vel, euismod tempus quam.</p>
            <p>Aliquam purus nibh, tincidunt accumsan sodales a, egestas non risus. Sed ut turpis dapibus, auctor neque at, dapibus velit. Sed id tortor in tellus tincidunt.</p>
          </div>
        </div>
      <?php endfor; ?>

      <div id="photo-wrapper">
        <div id="photo" class="container"></div>

        <nav id="controls" class="navbar container">
          <div class="control">
            <a id="prev" href="#"><i class="fa fa-chevron-left"></i></a>
          </div>
          <div class="control">
            <span id="photo-label">Name</span>
          </div>
          <div class="control pull-right">
            <a id="next" href="#"><i class="fa fa-chevron-right"></i></a>
          </div>
        </nav>
      </div>
    </article>

    <div class="clearfix" id="ads">
      <div class="visible-xs hidden-sm hidden-md hidden-lg col-xs-12">
        <div id="div-gpt-ad-1403295829614-3" class="center-block" style="width:320px; height:50px;">
          <script type="text/javascript">
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1403295829614-3'); });
          </script>
        </div>
      </div>
      <div class="hidden-xs visible-sm visible-md visible-lg col-xs-12">
        <div id="div-gpt-ad-1403295829614-1" class="center-block" style="width:728px; height:90px;">
          <script type="text/javascript">
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1403295829614-1'); });
          </script>
        </div>
      </div>
    </div>

    <p id="legal" class="center-block text-center"><small>© 2014 <a href="http://www.coxmediagroup.com" target="_blank">Cox Media Group</a>. By using this website, you accept the terms of our <a href="http://www.mystatesman.com/visitor_agreement/" target="_blank">Visitor Agreement</a> and <a target="_blank" href="http://www.mystatesman.com/privacy_policy/">Privacy Policy</a>, and understand your options regarding <a target="_blank" href="http://www.mystatesman.com/privacy_policy/#ad-choices">Ad Choices</a><img src="http://media.cmgdigital.com/shared/img/photos/2012/02/29/d3/da/ad_choices_logo.png" alt="AdChoices">.</small></p>

    <?php /* CMG advertising and analytics */ ?>
    <?php include "includes/project-metrics.inc"; ?>
    <?php include "includes/metrics.inc"; ?>

    <script src="dist/scripts.js"></script>
  </body>
</html>
