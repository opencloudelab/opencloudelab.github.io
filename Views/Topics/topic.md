<div ng-include src="'/Views/head.html'"></div>


<div class='container'>
<div class='row centered'>
		<div class="col-md-1"></div> 
		<div class="col-md-8">
			<a href='/#/'><h2>Go back</h2></a>
			<div ng-include src="'/Views/hosts_info.html'"></div>
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
				<div ng-switch-when="openstack_objectstorage">
					<div ng-include src="'/Views/Topics/openstack_objectstorage'"></div>
				</div>
				<div ng-switch-when="docker_containers">
					<div ng-include src="'/Views/Topics/docker_containers'"></div>
				</div>
				<div ng-switch-when="machine_learning">
					<div ng-include src="'/Views/Topics/machine_learning'"></div>
				</div>
				<div ng-switch-when="internet_of_things">
					<div ng-include src="'/Views/Topics/internet_of_things'"></div>
				</div>
			</div>
		</div>
	</div>
</div>


