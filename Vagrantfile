Vagrant.configure("2") do |config|
    config.vm.define "mernapi" do |mernapi|
        mernapi.vm.box = "debian/bullseye64"
        mernapi.vm.synced_folder ".", "/vagrant", disabled: false
        mernapi.vm.network "public_network", ip: "192.168.2.40"
        mernapi.vm.provider "virtualbox" do |v|
            v.memory= 4096
            v.cpus = 4
            v.name = "mernapi"
        end
        mernapi.vm.provision "shell", inline: "apt-get update -y"
        mernapi.vm.provision "shell", inline: "apt-get install -y build-essential dkms linux-headers-$(uname -r)"
        mernapi.vm.provision "shell", inline: "apt-get install docker.io -y"
        mernapi.vm.provision "shell", inline: "apt-get install docker-compose -y"
        mernapi.vm.provision "shell", inline: "usermod -aG docker vagrant"
    end   
end