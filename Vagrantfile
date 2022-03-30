Vagrant.configure("2") do |config|
    config.vm.define "mernStack" do |mernStack|
        mernStack.vbguest.auto_update = false
        mernStack.vm.box = "debian/bullseye64"
        mernStack.vm.synced_folder ".", "/vagrant", disabled: true
        mernStack.vm.network "public_network", ip: "192.168.2.40"
        mernStack.vm.provider "virtualbox" do |v|
            v.memory= 4096
            v.cpus = 4
            v.name = "mernStack"
        end
        mernStack.vm.provision "shell", inline: "apt-get update -y"
        mernStack.vm.provision "shell", inline: "apt-get install -y cifs-utils"
        mernStack.vm.provision "shell", inline: "apt-get install docker.io -y"
        mernStack.vm.provision "shell", inline: "apt-get install docker-compose -y"
        mernStack.vm.provision "shell", inline: "usermod -aG docker vagrant"
    end   
end