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
				<div ng-switch-when="cloud_dashboard">
					<div ng-include src="'/Views/Topics/cloud_dashboard'"></div>
				</div>
				<div ng-switch-when="ceph_installation">
					<div ng-include src="'/Views/Topics/ceph_installation'"></div>
				</div>
				<div ng-switch-when="swift_installation">
					<div ng-include src="'/Views/Topics/swift_installation'"></div>
				</div>
				<div ng-switch-when="docker-containers">
					<div ng-include src="'/Views/Topics/docker-containers'"></div>
				</div>
				<div ng-switch-when="machine_learning">
					<div ng-include src="'/Views/Topics/machine_learning'"></div>
				</div>
				<div ng-switch-when="tensor_flow">
					<div ng-include src="'/Views/Topics/tensor-flow'"></div>
				</div>
				<div ng-switch-when="caffe_for_deep_learning">
					<div ng-include src="'/Views/Topics/caffe_for_deep_learning'"></div>
				</div>
				<div ng-switch-when="internet_of_things">
					<div ng-include src="'/Views/Topics/internet_of_things'"></div>
				</div>
				<div ng-switch-default="openstack_contribution">
					<div ng-include src="'/Views/Topics/openstack_contribution'"></div>
				</div>
			</div>
		</div>
	</div>
</div>


