<div ng-include src="'/Views/head.html'"></div>


<div class='container'>
<div class='row centered'>
		<div class="col-md-1"></div> 
		<div class="col-md-8">
			<a href='/#/'><h2>Go back</h2></a>
			<div ng-switch='topicName'>
				<div ng-switch-when="openstack_contribution">
					<div ng-include src="'/Views/Topics/openstack_contribution'"></div>
				</div>
				<div ng-switch-when="openstack_installation">
					<div ng-include src="'/Views/Topics/openstack_installation'"></div>
				</div>
				<div ng-switch-default>
					<div ng-include src="'/Views/Topics/openstack_contribution'"></div>
				</div>
			</div>
		</div>
	</div>
</div>


