class Ad < ActiveRecord::Base
	validates_presence_of :price, :seller_id
end
