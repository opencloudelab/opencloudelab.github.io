---
layout: default
title: Openstack Contribution
---

<style>
ul.mod {
	line-height: 110%;
}
</style>


### Video Lessons
<ul class='mod'>
	{% for post in site.posts reversed %}

		{% if post.categories contains 'openstack-contri' %}
		
		<li>
			<h4>
				<a href="{{ post.url }}" target="_blank"><i class="fa fa-flask" aria-hidden="true"></i> {{ post.title }}</a>
			</h4>
			<p class='text-primary'>April 8th, 2016  by Xin Zhang<br></p>
			<p class='text-muted'>Course content snapshot should be placed here. OpenStack began in 2010 as a joint project of Rackspace Hosting and NASA.<br><hr></p>
		</li>
		{% endif %}
		
	{% endfor %}

</ul>