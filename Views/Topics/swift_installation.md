---
layout: default
title: swift installation
---

<style>
ul.mod {
	line-height: 110%;
}
</style>

### Video Lessons
<ul class='mod'>
	{% for post in site.posts reversed %}

		{% if post.categories contains 'openstack-objectstorage' %}
		
		<li>
			<h4>	
				<a href="{{ post.url }}" target="_blank"><i class="fa fa-flask" aria-hidden="true"></i> {{ post.title }}</a>
			</h4>
			<p class='text-primary'>{{ post.author }}</p>
			<p class='text-muted'> {{ post.description }}</p>
		</li>
		{% endif %}
		
	{% endfor %}

</ul>
