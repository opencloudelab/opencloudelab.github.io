---
layout: default
title: ceph Installation
---

<style>
ul.mod {
	line-height: 110%;
}
</style>

### Ceph Video Lessons
<ul class='mod'>
	{% for post in site.posts reversed %}

		{% if post.categories contains 'ceph-install' %}
		
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
