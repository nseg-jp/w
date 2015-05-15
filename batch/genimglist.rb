#!/usr/bin/env ruby
# -*- coding: utf-8 -*-
require 'uri'
require 'net/https'
require 'json'

class NSEGImgListGenerator

  FLICKR_API_KEY = '344bc9b73ac85cd570bd61191c57080e'
  FLICKR_GROUP_ID = '1527351@N25'
  FLICKR_TAGS = 'nseg'
  FLICKR_SORT = 'date-posted-desc'
  FLICKR_PRIVACY_FILTER = 'public photos'
  FLICKR_PER_PAGE = '100'

  def get_flickr()
    result = nil;
    uri = URI.parse('https://api.flickr.com/services/rest/')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    res = http.start do
      q  = '?format=json'
      q += '&nojsoncallback=1'
      q += '&method=flickr.photos.search'
      q += "&api_key=#{FLICKR_API_KEY}"
      #q += "&group_id=#{FLICKR_GROUP_ID}"
      q += "&tags=#{FLICKR_TAGS}"
      q += "&sort=#{FLICKR_SORT}"
      q += "&privacy_filter=#{FLICKR_PRIVACY_FILTER}"
      q += "&per_page=#{FLICKR_PER_PAGE}"
      http.get(uri.request_uri + q)
    end
    result = JSON.parse(res.body)
    return result
  end

  def get_imagelist(data)
    result = [];
    data['photos']['photo'].each do |item|
      path  = "http://farm#{item['farm']}.static.flickr.com/"
      path += "#{item['server']}/#{item['id']}_#{item['secret']}"
      path += '_n.jpg'
      #path += '_t.jpg'
      result << path
    end
    return result
  end

  def put_vegas_json(imgs)
    buff = []
    imgs.sort.each do |i|
      buff << { :src => i, :fade => 2000  } 
    end
    return JSON.generate(buff)
  end

end


def do_exec()
  gen = NSEGImgListGenerator.new
  buff = gen.get_flickr()
  list = gen.get_imagelist(buff)
  result = 'var vegas_imgs = ' + gen.put_vegas_json(list)

  file = File.expand_path(__FILE__)
  file = File.dirname(File.dirname(file)) + '/assets/js/vegas-imgs.js'
  File.write(file, result)
end

do_exec()
